class CreateCults < ActiveRecord::Migration[5.2]
  def change
    create_table :cults do |t|
      t.string :name
      t.string :holy_text

      t.timestamps
    end
  end
end
