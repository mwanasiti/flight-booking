class CreateUserProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :user_profiles do |t|
      t.string :name
      t.string :mail
      t.integer :mobile
      t.integer :id_passport
      t.string :gender
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
