Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root "posts#index"

  resources :posts do
    resources :comments, only: [:create , :destroy]
  end

  resources :users do
    get "editpass" => "users#passedit"
    patch 'editpass' => "users#passupdate"
  end


  get "/session/new" => 'sessions#new'
  post "/session" => 'sessions#create'
  delete '/session' => 'sessions#destroy'


end
