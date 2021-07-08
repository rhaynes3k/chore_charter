class Chore < ApplicationRecord
  belongs_to :user
  has_many :daysOfTheWeeks

  validates :choreName,:choreDOW, presence: true
  validates :choreDOW, length: { minimum: 6 }
end
