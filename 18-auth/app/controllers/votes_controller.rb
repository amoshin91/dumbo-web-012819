class VotesController < ApplicationController

  # skip_before_action :verify_authenticity_token

  def create
    if @can_vote
      @vote = Vote.create(color_id: params[:color_id], user_id: @logged_in_user.id)
      # use_vote
      flash[:message] = "You just voted for ##{ @vote.color.hex }"
    else
      flash[:errors] = [ "No more votes 💁‍♀️", "You can't!" ]
    end
    redirect_to colors_path
  end

  def index
    if @logged_in
      @all_votes = Vote.all
    else
      redirect_to new_login_path
      return
    end
  end

  def destroy
    @vote = Vote.find(params[:id])
    if @logged_in && @vote.user_id == @logged_in_user.id
      @vote.destroy
    else
      flash[:errors] = [ "Gotcha, hacker" ]
      redirect_to new_login_path
      return
    end
    redirect_to votes_path
  end

end

