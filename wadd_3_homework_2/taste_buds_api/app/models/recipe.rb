class Recipe < ApplicationRecord

  belongs_to :user

  has_many :reviews

  validates :title, presence: true, uniqueness: { scope: :user_id, message: "You only can have one recipe with this name."}
  validates :description, presence: true

end