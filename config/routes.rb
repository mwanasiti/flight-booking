Rails.application.routes.draw do
  
  namespace :api do
    resources :users
    resources :flights
    resources :user_profiles
    resources :user_flights
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
