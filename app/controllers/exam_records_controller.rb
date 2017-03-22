class ExamRecordsController < ApplicationController
  before_action :set_exam_record, only: [:show, :edit, :update, :destroy]

  # GET /exam_records
  # GET /exam_records.json
  def index
    @exam_records = ExamRecord.all
    @questionaires = Questionaire.all
  end

  # GET /exam_records/1
  # GET /exam_records/1.json
  def show
  end

  # GET /exam_records/new
  def new
    @exam_record = ExamRecord.new
  end

  # GET /exam_records/1/edit
  def edit
  end

  # POST /exam_records
  # POST /exam_records.json
  def create
    @exam_record = ExamRecord.new(exam_record_params)

    respond_to do |format|
      if @exam_record.save
        format.html { redirect_to @exam_record, notice: 'Exam record was successfully created.' }
        format.json { render :show, status: :created, location: @exam_record }
      else
        format.html { render :new }
        format.json { render json: @exam_record.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /exam_records/1
  # PATCH/PUT /exam_records/1.json
  def update
    respond_to do |format|
      if @exam_record.update(exam_record_params)
        format.html { redirect_to @exam_record, notice: 'Exam record was successfully updated.' }
        format.json { render :show, status: :ok, location: @exam_record }
      else
        format.html { render :edit }
        format.json { render json: @exam_record.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /exam_records/1
  # DELETE /exam_records/1.json
  def destroy
    @exam_record.destroy
    respond_to do |format|
      format.html { redirect_to exam_records_url, notice: 'Exam record was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exam_record
      @exam_record = ExamRecord.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def exam_record_params
      params.require(:exam_record).permit(:user_id, :exam_items)
    end
end
