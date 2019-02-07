class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      # Describes the columns and their types
      t.string :name
      t.string :email
      t.string :password
      t.integer :age
    end
  end
end
