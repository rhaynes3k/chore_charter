class CreateColors < ActiveRecord::Migration[6.0]
  def change
    create_table :colors do |t|
      t.string :colorPic

      t.timestamps
    end
  end
end
