class Book < ActiveRecord::Base
  belongs_to :author
  has_many :book_libraries
  has_many :libraries, through: :book_libraries
  # def author
  #   # GOAL: Return the instance of the author
  #   # that THIS book belogns to
  #   # Author.all.find do |author|
  #   #   author.id == self.author_id
  #   # end
  #
  #   Author.find(self.author_id)
  # end

end
