class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title

  belongs_to :user, key: :owner, serializer: RecipeIndexUserSerializer
  # has_many :reviews, each_serializer:
end
