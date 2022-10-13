class CreateUserFlights < ActiveRecord::Migration[7.0]
  def change
    create_table :user_flights do |t|

      t.timestamps
    end
  end
end
