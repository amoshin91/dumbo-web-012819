require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end


  get "/songs" do
    @songs = Song.all
    erb :index
  end

  get "/songs/:id" do
    @song = Song.find(params[:id])
    erb :show
  end

  get "/songs/:id/edit" do
    @song = Song.find(params[:id])
    erb :edit
  end

  post "/songs/:id" do
    @song = Song.create(params[:song])
    erb :show
  end

  patch "/songs/:id" do
    @song = Song.find(params[:id])
    @song.update(params[:song])
    erb :show
  end

end
