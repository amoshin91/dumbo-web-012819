require 'pry'
# Class
# Food
##########
# nutrients
# taste
# color
# calories
# texture

# Class => A blueprint
# Describe what are the things this

# Object/Instance of a Class => Is the realization of the blueprint
# Carrot
# ======
# Vitamin
# Carroty
# Orange
# 70
# Hard/Crunchy


class Food

  # Macro => A shorthand for building functions
  # attr_reader :nutrients, :color, :taste
  # attr_writer :nutrients, :color, :taste

  attr_accessor :nutrients, :color, :taste

  @@all_foods = []

  # Whenever I write Food.new, tell me what I should do/ what should I take in
  def initialize(nutrients, taste, color)

    # Instance variable => We gotta use it so that the instance remembers
    # its value
    @nutrients = nutrients
    @taste = taste
    @color = color

    @@all_foods << self
  end

  def self.all_foods
    @@all_foods
  end

  # This makes it a class method
  # When we call a class method, self is=> class
  def self.who
    puts "Who's calling me? #{self}"
  end

  # Instance methods => Must be called on an
  # instance of the class/object
  def rot
    puts "Who's calling me? #{self}"
    @is_rotten = true
    puts "Sorry, you're food went bad"
  end

  # Attribute Writer => I want to rewrite the value of the attribute
  # def taste=(new_taste)
  #   @taste = new_taste
  # end
  #
  # def color=(new_color)
  #   @color = new_color
  # end
  #
  # def nutrients=(new_nutrients)
  #   @nutrients = new_nutrients
  # end


  # Attribute Readers => To read the values of *instance variables*
  # We need to make a method that let's see the VALUE of
  # our instance variable @color
  # def color
  #   @color
  # end
  #
  # def taste
  #   @taste
  # end

  # def nutrients
  #   @nutrients
  # end
end

# carrot = { nutrients: "Vitamin", taste: "Carroty", color: "Orange"}
# apple = { nutrients: "Vitamin C", taste: "Sweet", color: "Green"}
# pineapple = { nutrient: "Vitamin C", taste: "Sweet", color: "Yellow"}
carrot = Food.new("Vitamin", "Carroty", "Orange")
apple = Food.new("Vitamin C", "Sweet", "Green")
pineapple = Food.new("Vitamin C", "Sweet", "Yellow")


# Here we practice utilizing our iterators
Food.all_foods.map { |food| food.color } # returns an array of foods

# Each of the iterators do not MUTATE (CHANGE) THE ORIGINAL ARRAY BY DEFAULT
# If you NEED to, you then can append a '!' to the end



binding.pry
0











#
