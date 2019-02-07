require_relative '../config/environment'

puts "Welcome to the Flatiron App"
puts "What is your name?"
name = gets.chomp
puts "What is your email?"
email = gets.chomp
puts "What is password?"
password = gets.chomp
Student.create(name: name, email: email, password: password)
