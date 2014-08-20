Rails.application.routes.draw do

  root 'home#index'

  resources :words do
    get :japanese,  on: :collection
    get :edit,  on: :collection
    get :complete,  on: :collection
  end

  devise_for :users, :controllers => {
    :sessions => "users/sessions",
    :registrations => "users/registrations",
    :passwords => "users/passwords",
    :omniauth_callbacks => "users/omniauth_callbacks"
  }

end
