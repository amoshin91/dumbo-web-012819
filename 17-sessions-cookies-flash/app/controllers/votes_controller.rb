class VotesController < ApplicationController

  def create
    if @can_vote
      @vote = Vote.create(color_id: params[:color_id])
      use_vote
    else
      flash[:errors] = [ "No more votes 💁‍♀️", "You can't!" ]
    end
    redirect_to colors_path
  end

end

