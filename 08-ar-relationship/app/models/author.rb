class Author < ActiveRecord::Base
  has_many :books
  has_many :libraries, through: :books
  # def books
  #   Book.all.select do |book|
  #     book.author_id == self.id
  #   end
  # end
end
