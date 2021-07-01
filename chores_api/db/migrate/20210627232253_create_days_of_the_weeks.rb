class CreateDaysOfTheWeeks < ActiveRecord::Migration[6.0]
  def change
    create_table :days_of_the_weeks do |t|
      t.string :monday
      t.string :tuesday
      t.string :wednesday
      t.string :thursday
      t.string :friday
      t.string :saturday
      t.string :sunday
      t.integer :chore_id

      t.timestamps
    end
  end
end
