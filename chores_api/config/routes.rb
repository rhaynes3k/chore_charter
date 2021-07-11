Rails.application.routes.draw do

  resources :colors
    resources :users
    resources :chores
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
