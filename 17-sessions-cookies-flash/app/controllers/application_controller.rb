class ApplicationController < ActionController::Base

  before_action :setup_voting

  def setup_voting
    session["votes"] ||= 5
    @votes = session["votes"]
    @can_vote = @votes > 0
    @errors = flash[:errors]
  end

  def use_vote
    @votes -= 1
    session["votes"] = @votes
  end

end