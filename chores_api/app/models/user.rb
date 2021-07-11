class User < ApplicationRecord
  has_many :chores

  validates :fName, :lName, :age, presence: { message: "%{attribute} cannot be blank" }
  validates :fName, uniqueness: { message: "%{attribute} has been taken" }
  validates :age, numericality: { only_integer: true, message: "%{value} is not a valid age"}
end
