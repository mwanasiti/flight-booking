class CreateUserRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :user_ratings do |t|
      t.string :image
      t.string :name
      t.float :rating
      t.string :reason
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
