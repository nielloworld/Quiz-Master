class Questionaire
  include Mongoid::Document
  field :question, type: String
  field :answer, type: String
end
