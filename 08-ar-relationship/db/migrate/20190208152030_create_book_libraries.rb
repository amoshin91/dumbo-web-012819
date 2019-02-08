class CreateBookLibraries < ActiveRecord::Migration[5.2]
  def change
    create_table :book_libraries do |t|
      t.integer :library_id
      t.integer :book_id
    end
  end
end
