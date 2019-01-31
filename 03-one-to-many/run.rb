# The purpose will be to be my sandbox
require_relative 'author.rb' # adding a file
require_relative 'book.rb'

require 'pry'  # Adding a Library


prince = Author.new("Prince", "03/08")
greg = Author.new("Greg", "04/30")
matt = Author.new("Matt", "03/24")

Book.new(1, "Dang Matt, Your an author", matt)
Book.new(40, "A Review over Matt's Book", greg)
Book.new(100, "Alternatives to Matt's Philosophy", greg)
Book.new(20, "Corgis", prince)

binding.pry
0
