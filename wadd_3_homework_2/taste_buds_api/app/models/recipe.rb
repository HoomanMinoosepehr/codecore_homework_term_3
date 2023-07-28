class Recipe < ApplicationRecord

  belongs_to :user

  has_many :reviews, dependent: :destroy 

  validates :title, presence: true, uniqueness: { scope: :user_id, message: "You only can have one recipe with this name."}
  validates :description, presence: true
  validates :people_number, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }

end