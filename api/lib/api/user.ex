defmodule Api.User do
  use Ecto.Schema
  import Ecto.Changeset
  alias Api.{ Auth, User, Repo, AuthToken }

  schema "users" do
    has_many :auth_tokens, AuthToken
    field :email, :string
    field :password_hash, :string
    field :password, :string, virtual: true

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:email, :password])
    |> validate_required([:email, :password])
    |> unique_constraint(:email, downcase: true)
    |> put_pass_hash()
  end

  defp put_pass_hash(%Ecto.Changeset{valid?: true, changes:
      %{password: password}} = changeset) do
    change(changeset, Argon2.add_hash(password))
  end

  defp put_pass_hash(changeset), do: changeset

  def sign_in(email, password) do
    case Argon2.check_pass(Repo.get_by(User, email: email), password) do
      {:ok, user} ->
        token = Auth.generate_token(user)
        Repo.insert(Ecto.build_assoc(user, :auth_tokens, %{token: token}))
      err -> err
    end
  end

  def sign_out(conn) do
    case Auth.get_auth_token(conn) do
      {:ok, token} ->
        case Repo.get_by(AuthToken, %{token: token}) do
          nil -> {:error, :not_found}
          auth_token -> Repo.delete(auth_token)
        end
      err -> err
    end
  end

  def create_user(email, password) do
    case Repo.get_by(User, %{email: email}) do
      nil -> Repo.insert(User.changeset(%User{}, %{email: email, password: password}))
      _user -> {:error, "Duplicate Email"}
    end
  end
end
