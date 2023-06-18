class User < ApplicationRecord
    has_secure_password

    has_many :posts, dependent: :destroy

    has_many :comments, dependent: :destroy

    has_many :likes, dependent: :destroy
    has_many :liked_comments, through: :likes, source: :user

    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true


    def full_name
        first_name + ' ' + last_name
    end
    
end
