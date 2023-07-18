class RecipeShowReviewUserSerializer < ActiveModel::Serializer

  attributes :rating, :body

  belongs_to :user, key: :reviewer, serializer: RecipeIndexUserSerializer
  
end