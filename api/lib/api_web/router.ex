defmodule ApiWeb.Router do
  use ApiWeb, :router
  alias ApiWeb.{ SessionsController, AccountsController}

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ApiWeb do
    pipe_through :api
  end

  scope "/sessions" do
    post "/login", SessionsController, :create
    delete "/sign_out", SessionsController, :delete
  end

  scope "/accounts" do
    post "/new", AccountsController, :create
  end
end
