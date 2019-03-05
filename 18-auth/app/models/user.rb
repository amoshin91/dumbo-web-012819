class User < ApplicationRecord

  has_many :votes

  validates :username, { presence: true, uniqueness: true }

  has_secure_password

  # def password=(plaintext)
  #   # cow into ground beef
  #   self.password_digest = BCrypt::Password.create(plaintext)
  # end

  # def authenticate(password)
  #   # ground beef with special powers
  #   BCrypt::Password.new(self.password_digest) == password
  # end

  def remaining_votes
    5 - self.votes.length
  end

end
