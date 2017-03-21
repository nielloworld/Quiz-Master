class HomeController < ApplicationController
  def index

  	 @current_user = session[:current_user]
        @current_name = session[:current_name]
    @current_admin = session[:current_admin]
  	 if @current_user.nil?
  	 	redirect_to "/"
  	 end
  end

  def show
  	@current_user = session[:current_user]
  	@current_name = session[:current_name]
  	@current_admin = session[:current_admin]
  	render :index
  end

  def logout
  	reset_session
  	redirect_to "/"
  end

  def questionaires
    redirect_to "/questionaires"
  end
end
