Rails.application.routes.draw do
  root "posts#index"
  resources :posts, except: :show
  resources :posts, only: :show do
    resources :comments, only: :create
  end
end
