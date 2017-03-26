require 'test_helper'

class ExamRecordsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @exam_record = exam_records(:one)
  end

  test "should get index" do
    get exam_records_url
    assert_response :success
  end

  test "should get new" do
    get new_exam_record_url
    assert_response :success
  end

  test "should create exam_record" do
    assert_difference('ExamRecord.count') do
      post exam_records_url, params: { exam_record: { exam_items: @exam_record.exam_items, user_id: @exam_record.user_id } }
    end

    assert_redirected_to exam_record_url(ExamRecord.last)
  end

  test "should show exam_record" do
    get exam_record_url(@exam_record)
    assert_response :success
  end

  test "should get edit" do
    get edit_exam_record_url(@exam_record)
    assert_response :success
  end

  test "should update exam_record" do
    patch exam_record_url(@exam_record), params: { exam_record: { exam_items: @exam_record.exam_items, user_id: @exam_record.user_id } }
    assert_redirected_to exam_record_url(@exam_record)
  end

  test "should destroy exam_record" do
    assert_difference('ExamRecord.count', -1) do
      delete exam_record_url(@exam_record)
    end

    assert_redirected_to exam_records_url
  end
end
