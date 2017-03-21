Rails.application.routes.draw do
  get 'home/index'
  get 'welcome/modify_session_variables'
  get 'welcome/index'
  get 'home/show'
	get '/home/index/:current_user' => 'home#index'
  get '/home/logout'
  get '/home/questionaires'
  get '/home/quiz'
  get '/questionaires/home'
  get '/questionaires/destroy/:id' => 'questionaires#destroy'
  get '/questionaires/edit/:id' => 'questionaires#edit'
	  root to: 'welcome#index'
	  post 'users/new'
	  post 'users/create'
  resources :exam_records
  resources :questionaires
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
