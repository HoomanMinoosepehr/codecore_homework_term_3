class Review < ApplicationRecord

  belongs_to :user
  belongs_to :recipe

  validates :user, uniqueness: { message: "You have alreadey added a review to this recipe." }
  validates_numericality_of :rating, greater_than_or_equal_to: 1, less_than_or_equal_to: 5
  
end
