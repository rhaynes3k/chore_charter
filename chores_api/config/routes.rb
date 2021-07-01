Rails.application.routes.draw do

  resources :users do
    resources :chores, only: [:show, :index, :new, :create]
  end


    resources :chores
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
