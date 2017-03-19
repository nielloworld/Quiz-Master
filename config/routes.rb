Rails.application.routes.draw do
  resources :exam_records
  resources :questionaires
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
