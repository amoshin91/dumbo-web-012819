# I need to tell it that I am sending a request
# Typically it is a get of information
require 'rest-client'
require 'json'
require 'pry'
# RestClient.get => It sends a *request*
# What it returns back is a *RESPONSE*
raw_response = RestClient.get("https://www.reddit.com/r/corgis.json").body
json_response = JSON.parse(raw_response)

# binding.pry
json_response["data"]["children"].each do |post|
  puts "=================================="
  puts "Title: #{post["data"]["title"]}"
  puts "Score: #{post["data"]["score"]}"
  puts "Author: /u/#{post["data"]["author"]}"
  puts "=================================="
end
