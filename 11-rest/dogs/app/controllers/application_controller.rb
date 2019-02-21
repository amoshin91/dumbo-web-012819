require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end

  # welcome
  get "/" do
    erb :welcome
  end

  # index
  get "/dogs" do
    @dogs = Dog.all
    erb :index
  end

  # get '/dogs/:id' do |id|
  #   @dog = Dog.find(id)
  #   erb :show
  # end

  # New
  get "/dogs/new" do
    @dog = Dog.new
    erb :new
  end

  # create
  post '/dogs' do
    # create a new instance of the dog
    # use the params to set stuff on the dog
    @dog = Dog.new(params[:dog])
    # save the dog
    @dog.save
    # redirect to the dog show page for the one that was just created
    redirect to "/dogs/#{ @dog.id }"
  end

  # Show
  get '/dogs/:id' do
    get_dog
    erb :show
  end

  # edit
  get "/dogs/:id/edit" do
    get_dog
    erb :edit
  end

  # update
  patch '/dogs/:id' do
    # binding.pry
    get_dog
    # params.delete(:"_method")
    @dog.update(params[:dog])

    redirect "/dogs/#{ @dog.id }"
  end

  #delete 
  delete "/dogs/:id" do
    # p "HI FROM THE DELETE 🐕 action"
    get_dog
    @dog.delete
    redirect to "/dogs"
  end


  # params = {
  #   _method: "PATCH",
  #   id: 3,
  #   dog: {
  #     name: "Gizmo XIV",
  #     tail_length: -2
  #   }
  # }



  def get_dog
    @dog = Dog.find(params[:id])
  end
 

end
