class CreateBloodOaths < ActiveRecord::Migration[5.2]
  def change
    create_table :blood_oaths do |t|
      t.belongs_to :follower, foreign_key: true
      t.references :cult, foreign_key: true

      t.timestamps
    end
  end
end
