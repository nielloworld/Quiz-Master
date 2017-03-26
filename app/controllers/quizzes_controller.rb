class QuizzesController < ApplicationController
  before_action :set_quiz, only: [:show, :edit, :update, :destroy]
require 'numbers_in_words'
  # GET /quizzes
  # GET /quizzes.json
  def index
    @quizzes = Quiz.all
    @questionaires = Questionaire.all
    @current_user = session[:current_user]
     if @current_user.nil?
      redirect_to "/"
     end
  end

  # GET /quizzes/1
  # GET /quizzes/1.json
  def show
  end

  # GET /quizzes/new
  def new
    @quiz = Quiz.new
    @current_user = session[:current_user]
     if @current_user.nil?
      redirect_to "/"
     end
  end

  # GET /quizzes/1/edit
  def edit
    @current_user = session[:current_user]
     if @current_user.nil?
      redirect_to "/"
     end
  end

  # POST /quizzes
  # POST /quizzes.json
  def create
    @quiz = Quiz.new(quiz_params)

    respond_to do |format|
      if @quiz.save
        format.html { redirect_to @quiz, notice: 'Quiz was successfully created.' }
        format.json { render :show, status: :created, location: @quiz }
      else
        format.html { render :new }
        format.json { render json: @quiz.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /quizzes/1
  # PATCH/PUT /quizzes/1.json
  def update
    respond_to do |format|
      if @quiz.update(quiz_params)
        format.html { redirect_to @quiz, notice: 'Quiz was successfully updated.' }
        format.json { render :show, status: :ok, location: @quiz }
      else
        format.html { render :edit }
        format.json { render json: @quiz.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /quizzes/1
  # DELETE /quizzes/1.json
  def destroy
    @current_user = session[:current_user]
     if @current_user.nil?
      redirect_to "/"
     end
    @quiz.destroy
    respond_to do |format|
      format.html { redirect_to quizzes_url, notice: 'Quiz was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
  def review
    @quizzes = Quiz.all
    @questionaires = Questionaire.all
    @current_user = session[:current_user]
     if @current_user.nil?
      redirect_to "/"
     end
  end

  def start
        @quizzes = Quiz.all
    @questionaires = Questionaire.all
    @current_user = session[:current_user]
    @current_name = session[:current_name]
    @current_admin = session[:current_admin]
     if @current_user.nil?
      redirect_to "/"
     end
  end

  def result
    
        params.each do |key,value|

  Rails.logger.warn "Param #{key}: #{value}"
end
    params.permit!()
    @result      = params[:resultquiz]
    @current_user = session[:current_user]
    @current_name = session[:current_name]
    @current_admin = session[:current_admin]
     if @current_user.nil?
      redirect_to "/"
     end 
     params[:resultquiz].each do |x, y|
        if y[:answer].numeric?
          if y[:useranswer].numeric?
            if y[:answer].to_i  == y[:useranswer].to_i 
              @result[x][:correct] = "correct"
            else
              @result[x][:correct] = "incorrect"
            end 
          else 
             @temp = NumbersInWords.in_numbers(y[:useranswer]) 
             if y[:answer].to_i  == @temp.to_i 
              @result[x][:correct] = "correct"
             else
              @result[x][:correct] = "incorrect"
             end 
          end
        else
          if y[:useranswer].numeric?
             @temp = NumbersInWords.in_words(y[:useranswer]) 
             if y[:answer].to_i  == @temp.to_i 
              @result[x][:correct] = "correct"
             else
              @result[x][:correct] = "incorrect"
             end 
          else 
             if y[:answer].downcase.remove_whitespace == y[:useranswer].downcase.remove_whitespace
              @result[x][:correct] = "correct"
            else
              @result[x][:correct] = "incorrect"
            end 
          end 
        end     
     end

     flash[:resultquiz] = @result
     render :js => "window.location = '/quiz/showResult'"
  end

def showResult

end
def home
  redirect_to "/home/index"
  end
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_quiz
      @quiz = Quiz.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def quiz_params
      params.require(:quiz).permit(:user_id, :question_items).permit!(:resultquiz)
    end
end
