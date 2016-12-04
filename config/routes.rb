Rails.application.routes.draw do

  root 'templates#index'

  get '/templates/:path.html' => 'templates#template', constraints: { path: /.+/ }

  namespace :api, defaults: { format: :json } do
    mount_devise_token_auth_for 'User', at: 'auth'
    resources :todo_lists, only: [:index, :show, :create, :destroy] do
      resources :todos, except: [:index, :new, :edit, :show]
    end
  end

end
