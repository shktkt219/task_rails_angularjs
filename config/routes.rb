Rails.application.routes.draw do
  
  root 'templates#index'
  get '/dashboard' => 'templates#index'
  get '/todo_lists/:id' => 'templates#index'
  get '/about' => 'templates#index'
  get '/templates/:path.html' => 'templates#templates', constraints: { path: /.+/ }

  namespace :api, defaults: { format: :json } do
    resources :todo_lists, only: :show do
      resources :todos, except: [:index, :new, :edit, :show]
    end
  end
end
