class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :fName
      t.string :lName
      t.string :age

      t.timestamps
    end
  end
end
