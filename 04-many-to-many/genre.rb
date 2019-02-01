class Genre

  attr_reader :genre_type

  def initialize(genre_type)
    # the name of the genre
    @genre_type = genre_type
  end

  def books
    Book.all.select do |book|
      book.genre == self
    end
  end

  # fantasy = Genre.new("Fantasy")
  # fantasy.genre_type
end
