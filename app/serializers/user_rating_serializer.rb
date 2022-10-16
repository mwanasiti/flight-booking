class UserRatingSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :rating, :reason, :user_id

end
