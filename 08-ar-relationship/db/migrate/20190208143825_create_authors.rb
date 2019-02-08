class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
      # The data type and the column
      t.string :name
      t.integer :age
      t.string :location
    end
  end
end
