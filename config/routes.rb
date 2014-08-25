Rails.application.routes.draw do

  root 'home#index'

  resources :words do
    get :edit, on: :member
    patch :complete, on: :member
  end

  devise_for :users, :controllers => {
    :sessions => "users/sessions",
    :registrations => "users/registrations",
    :passwords => "users/passwords",
    :omniauth_callbacks => "users/omniauth_callbacks"
  }

end
