defmodule ApiWeb.SessionsView do
  use ApiWeb, :view

  def render("show.json", auth_token) do
    %{data: %{token: auth_token.token, user_id: auth_token.user_id}}
  end
end