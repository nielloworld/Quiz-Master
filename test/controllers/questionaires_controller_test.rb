require 'test_helper'

class QuestionairesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @questionaire = questionaires(:one)
  end

  test "should get index" do
    get questionaires_url
    assert_response :success
  end

  test "should get new" do
    get new_questionaire_url
    assert_response :success
  end

  test "should create questionaire" do
    assert_difference('Questionaire.count') do
      post questionaires_url, params: { questionaire: { answer: @questionaire.answer, question: @questionaire.question } }
    end

    assert_redirected_to questionaire_url(Questionaire.last)
  end

  test "should show questionaire" do
    get questionaire_url(@questionaire)
    assert_response :success
  end

  test "should get edit" do
    get edit_questionaire_url(@questionaire)
    assert_response :success
  end

  test "should update questionaire" do
    patch questionaire_url(@questionaire), params: { questionaire: { answer: @questionaire.answer, question: @questionaire.question } }
    assert_redirected_to questionaire_url(@questionaire)
  end

  test "should destroy questionaire" do
    assert_difference('Questionaire.count', -1) do
      delete questionaire_url(@questionaire)
    end

    assert_redirected_to questionaires_url
  end
end
