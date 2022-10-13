class CreateFlights < ActiveRecord::Migration[7.0]
  def change
    create_table :flights do |t|
      t.string :flight_date
      t.string :airline
      t.string :airline_image
      t.string :from
      t.string :to
      t.integer :seats
      t.integer :cost

      t.timestamps
    end
  end
end
