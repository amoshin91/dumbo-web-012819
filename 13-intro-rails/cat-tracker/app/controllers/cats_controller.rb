class CatsController < ApplicationController

  def index
    @cats = Cat.all
    # redirect_to "http://www.apple.com"
  end


end
