class CreateLegs < ActiveRecord::Migration
  def change
    create_table :legs do |t|
      t.integer :dog_id
      t.string :color
      t.integer :length
    end
  end
end
