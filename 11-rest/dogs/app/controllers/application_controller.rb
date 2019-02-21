require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end

  get "/" do
    erb :welcome
  end

  get "/dogs" do
    @dogs = Dog.all
    erb :index
  end

  # get '/dogs/:id' do |id|
  #   @dog = Dog.find(id)
  #   erb :show
  # end

  get '/dogs/:id' do
    get_dog
    erb :show
  end

  get "/dogs/:id/edit" do
    get_dog
    erb :edit
  end

  delete "/dogs/:id" do
    # p "HI FROM THE DELETE 🐕 action"
    get_dog
    @dog.delete
    redirect to "/dogs"
  end

  patch '/dogs/:id' do
    "Hello World"
  end

  def get_dog
    @dog = Dog.find(params[:id])
  end
 

end
