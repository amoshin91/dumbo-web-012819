require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get("/dogs") do
    @dogs = Dog.all
    binding.pry
    # erb(:dogs)
    "sdfjkhsdafkjhsdfhjksdjhkfhjk"
  end


end
