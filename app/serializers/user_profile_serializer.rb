class UserProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :mail, :mobile, :id_passport, :gender, :user_id
end
