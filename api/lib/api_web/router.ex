defmodule ApiWeb.Router do
  use ApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api/v1", ApiWeb do
    pipe_through :api

    scope "/sessions" do
      post "/login", SessionsController, :create
      delete "/sign_out", SessionsController, :delete
    end

    scope "/accounts" do
      post "/new", AccountsController, :create
    end
  end

end
