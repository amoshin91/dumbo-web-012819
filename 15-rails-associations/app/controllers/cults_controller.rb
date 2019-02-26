class CultsController < ApplicationController

  def index
    @cults = Cult.includes(:followers).all
  end

  def show
    @cult = Cult.find(params[:id])
  end

end
