class CreateChores < ActiveRecord::Migration[6.0]
  def change
    create_table :chores do |t|
      t.string :choreName
      t.string :choreDOW
      t.integer :user_id

      t.timestamps
    end
  end
end
