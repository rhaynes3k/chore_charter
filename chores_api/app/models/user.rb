class User < ApplicationRecord
  has_many :chores

  validates :fName, :lName, :age, presence: true
  validates :fName, uniqueness: true
end
