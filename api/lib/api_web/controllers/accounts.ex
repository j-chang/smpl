defmodule ApiWeb.AccountsController do
  use ApiWeb, :controller
  alias Api.User

  def create(conn, %{"email" => email, "password" => password}) do
    case User.create_user(email, password) do
      {:ok, user} ->
        conn
        |> put_status(:ok)
        |> render("show.json", user)
      {:error, reason} ->
        conn
        |> send_resp(409, reason)
    end
  end
end