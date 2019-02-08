class Library < ActiveRecord::Base
  has_many :book_libraries
  has_many :books, through: :book_libraries


  def book_libraries
    BookLibrary.all.select do |bl|
      bl.library_id == self.id
    end
  end

  def books
    book_libraries.map do |bl|
      bl.book
    end
  end














end
