class Quiz
  include Mongoid::Document
  field :user_id, type: String
  field :question_items, type: String
end
