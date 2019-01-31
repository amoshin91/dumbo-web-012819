class Book
  attr_reader :pages, :title, :author

  @@all = []

  def initialize(pages, title, author)
    @pages = pages
    @title = title
    @author = author

    @@all << self
  end

  def self.all
    @@all
  end
end
