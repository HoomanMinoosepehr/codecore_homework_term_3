class RecipeShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :story, :spicy, :sweet, :salty

  has_many :reviews, serializer: RecipeShowReviewUserSerializer
  belongs_to :user, key: :owner, serializer: RecipeIndexUserSerializer
end
