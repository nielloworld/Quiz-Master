class User
  include Mongoid::Document
  field :name, type: String
  field :password, type: String
  field :admin, type: String
end
