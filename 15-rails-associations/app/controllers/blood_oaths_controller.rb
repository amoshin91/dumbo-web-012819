class BloodOathsController < ApplicationController

  def new
    @blood_oath = BloodOath.new
    @all_followers = Follower.all
    @all_cults = Cult.all
  end

  def create
    @blood_oath = BloodOath.create(blood_oath_params)
    redirect_to cults_path(@blood_oath.cult)  #works, redirects to a cult
    redirect_to cults_path(@blood_oath.id) #broken, redirects to the cult with the id of the blood oath
    redirect_to cults_path(@blood_oath) #broken, redirects to the cult with the id of the blood oath
    # redirect_to @blood_oath.follower # works, redirects to a follower
  end

  private

  def blood_oath_params
    params.require(:blood_oath).permit(:cult_id, :follower_id)
  end


end
