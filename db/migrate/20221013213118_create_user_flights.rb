class CreateUserFlights < ActiveRecord::Migration[7.0]
  def change
    create_table :user_flights do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :flight, foreign_key: true

      t.timestamps
    end
  end
end
