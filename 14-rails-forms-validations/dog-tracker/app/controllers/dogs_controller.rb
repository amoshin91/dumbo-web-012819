class DogsController < ActionController::Base

  before_action :get_dog, only: [:show, :edit, :update]

  def index
    @dogs = Dog.all
  end

  def show
  end

  def edit
  end

  def update
    @dog.update(dog_params)
    redirect_to @dog
  end

  private

  def get_dog
    @dog = Dog.find(params[:id])
  end

  def dog_params
    params.require(:dog).permit(:tail_length, :name, :color_hexadecimal)
  end


end
