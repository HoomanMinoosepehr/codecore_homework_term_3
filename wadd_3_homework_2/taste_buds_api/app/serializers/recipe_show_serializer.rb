class RecipeShowSerializer < ActiveModel::Serializer
  attributes :title

  has_many :reviews, serializer: RecipeShowReviewUserSerializer
  belongs_to :user, key: :owner, serializer: RecipeIndexUserSerializer
end
