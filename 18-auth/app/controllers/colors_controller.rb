class ColorsController < ApplicationController


  def index
    if request.path != colors_path
      redirect_to colors_path
    end

    @colors = Color.includes(:votes).all
    
    # if session[:user_id]
    #   render :index
    # else
    #   render :log_in_page
    # end
  end



end