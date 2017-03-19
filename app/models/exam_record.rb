class ExamRecord
  include Mongoid::Document
  field :user_id, type: String
  field :exam_items, type: String
end
