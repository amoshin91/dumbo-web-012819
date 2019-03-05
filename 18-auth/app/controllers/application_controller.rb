class ApplicationController < ActionController::Base

  before_action :setup_user_stuff

  def setup_user_stuff
    # session["votes"] ||= 5
    # @votes = session["votes"]
    # @can_vote = @votes > 0
    @logged_in = !!session[:user_id]
    if @logged_in
      @logged_in_user = User.find(session[:user_id])
      @can_vote = @logged_in_user.remaining_votes > 0
      @votes = @logged_in_user.remaining_votes
    end
    
    @errors = flash[:errors]
    @message = flash[:message]
  end

  def log_in_user(user)
    session[:user_id] = user.id
  end

  # def use_vote
  #   @votes -= 1
  #   session["votes"] = @votes
  # end

end