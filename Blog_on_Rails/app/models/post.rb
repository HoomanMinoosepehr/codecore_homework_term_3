class Post < ApplicationRecord

    has_many :comments, dependent: :destroy

    belongs_to :user

    validates :body, length: {minimum: 50, message: 'Body should have at least 50 characters.'}
    validates :title, uniqueness: true

end
