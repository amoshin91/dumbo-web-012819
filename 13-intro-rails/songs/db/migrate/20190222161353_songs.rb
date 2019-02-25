class Songs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title
      t.integer :duration
    end
  end
end
