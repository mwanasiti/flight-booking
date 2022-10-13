class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true, length: { minimum: 8 }

    has_secure_password
    has_one :user_profile, dependent: :destroy
    has_many :user_flights
    has_many :flights, through: :user_flights
end
