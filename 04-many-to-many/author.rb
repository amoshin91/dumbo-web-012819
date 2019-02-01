class Author
  # name, dob, books

  attr_reader :name, :dob

  def initialize(name, dob)
    @name = name
    @dob = dob
  end

    def books
      # I want all of MY BOOKS
      Book.all.select do |book|
        book.author == self
      end
    end

    # I have many genres THROUGH books
    def genres
      # [ #<Book>, #<Book @pages, @title, @author, @genre>]
      # books.map {|book| book.genre }
      books.map do |book|
        book.genre
      end
    end
end
