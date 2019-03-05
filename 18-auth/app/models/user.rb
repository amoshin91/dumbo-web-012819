class User < ApplicationRecord

  has_many :votes

  validates :username, { presence: true, uniqueness: true }

  def votes_remaining

  end 
end
