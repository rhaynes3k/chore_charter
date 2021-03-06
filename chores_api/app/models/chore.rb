class Chore < ApplicationRecord
  belongs_to :user

  validates :choreName,:choreDOW, presence: { message: "%{attribute} cannot be blank" }
  validates :choreDOW, inclusion: { in: %w(monday tuesday wednesday thursday friday saturday sunday),
    message: "%{value} is not a valid DOW" }
end
