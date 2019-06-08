defmodule ApiWeb.AccountsView do
  use ApiWeb, :view

  def render("show.json", user) do
    %{data: %{user_id: user.id, user_email: user.email}}
  end
end