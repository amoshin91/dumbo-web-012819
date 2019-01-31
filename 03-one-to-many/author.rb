class Author

  attr_reader :name, :dob

  def initialize(name, dob)
    # ???
    # Instance variable @name, @dob
    @name = name
    @dob = dob
  end

  def books
    # I want to find all of the books that match this author
    # How to get all the books
    # binding.pry
    Book.all.select do |book|
      # What is the condition to keep this book
      book.author == self
    end
  end

  def book_titles
    # EXPECTED RESULT ["Corgis"]
    # 1. Finding all the books I've written
    books.map do |book|
      book.title
    end
    # 2. Returning back all the titles of those books
    # WHAT THIS DATA TYPE IS SO FAR [#<Book>, #<Book>,#<Book>, ...]
    # ["Corgis", "Corgi Butts", ....]
  end












    #
end
