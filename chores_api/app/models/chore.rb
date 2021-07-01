class Chore < ApplicationRecord
  belongs_to :user
  has_many :daysOfTheWeeks
end
