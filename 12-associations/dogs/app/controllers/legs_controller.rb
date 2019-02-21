class LegsController < ApplicationController

  get "/legs" do
    erb :"legs/index"
  end


  get "/legs/new" do
    @leg = Leg.new
    @all_dogs = Dog.all
    erb :"legs/new"
  end

  post "/legs" do
    @leg = Leg.create(params[:leg])
    redirect "/dogs/#{ @leg.dog.id }"
  end

end