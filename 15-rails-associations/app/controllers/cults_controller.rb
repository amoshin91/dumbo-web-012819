class CultsController < ApplicationController

  def index
    @cults = Cult.all
  end

  def show
    @cult = Cult.find(params[:id])
  end

end
