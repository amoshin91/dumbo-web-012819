class Book

  attr_reader :title, :pages, :author, :genre

  @@all = []

  def initialize(title, pages, author, genre)
    @title = title
    @pages = pages
    @author = author
    @genre = genre

    @@all << self
  end

  def self.all
    @@all
  end
end
