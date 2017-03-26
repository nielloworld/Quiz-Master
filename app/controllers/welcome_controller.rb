class WelcomeController < ApplicationController
  def index
  		 @users = User.all
  		 
  end

  def modify_session_variables
  if params[:current_user]
    session[:current_user] = params[:current_user]
    session[:current_name]  = params[:current_name]
    session[:current_admin] = params[:current_admin]
  end
end
end
