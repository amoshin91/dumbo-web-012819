require_relative 'author.rb'
require_relative 'book.rb'
require_relative 'genre.rb'


require 'pry'




author1 = Author.new("Greg", "04/30")
author2 = Author.new("Prince", "03/08")
genre1 = Genre.new("Sci Fi")
genre2 = Genre.new("Corgis")
Book.new("A Life of Corgis", 1000, author2, genre2)
Book.new("What a Nightmare", 3, author1, genre1)
Book.new("A life of an Instructor", 2000, author1, genre2)


binding.pry
0
