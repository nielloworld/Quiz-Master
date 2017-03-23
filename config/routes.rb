Rails.application.routes.draw do
  get 'home/index'
  get 'welcome/modify_session_variables'
  get 'welcome/index'
  get 'home/show'
	get 'home/index/:current_user' => 'home#index'
  get 'home/logout'
  get 'home/questionaires'
  get 'home/start'
  get 'questionaires/home'
  get 'questionaires/destroy/:id' => 'questionaires#destroy'
  get 'quiz/start' => 'quizzes#start'
  get 'quiz/result' => 'quizzes#result'
  get 'quiz/showResult' => 'quizzes#showResult'
	  root to: 'welcome#index'
	  post 'users/new'
	  post 'users/create'
    resources :quizzes
  resources :exam_records
  resources :questionaires
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
