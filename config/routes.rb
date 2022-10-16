Rails.application.routes.draw do
  
  namespace :api do

    post '/signup', to: 'users#create'
    get '/me', to: 'users#show'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

    resources :users
    resources :flights
    resources :user_profiles
    resources :user_flights
    resources :user_ratings
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
