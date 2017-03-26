json.extract! quiz, :id, :user_id, :question_items, :created_at, :updated_at
json.url quiz_url(quiz, format: :json)
