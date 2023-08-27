class User < ApplicationRecord

    has_secure_password

    has_many :reviews
    has_many :recipes

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true, uniqueness:{case_sensitive: true, message: 'This email  address has already been taken!'}
    validates :password, length: {minimum: 8, message: 'too short! it should be at least 8 characters.'}

end
