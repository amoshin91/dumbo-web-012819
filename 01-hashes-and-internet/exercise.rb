require 'rest-client'
require 'json'
require 'pry'

# 1. Asking the user for what they want to look at
puts "What term do you wanna look for?"
search_term = gets.chomp

# 2. Making the request
raw_response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{search_term}").body
json_response = JSON.parse(raw_response)

# binding.pry
# puts json_response

json_response["items"].each do |book|
  puts "~~~~~~~~~~~~~~~~~~~~~"
  puts book["volumeInfo"]["title"]
  puts book["volumeInfo"]["authors"]
  puts book["volumeInfo"]["description"]
  puts "~~~~~~~~~~~~~~~~~~~~~"
end
