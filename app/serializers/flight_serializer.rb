class FlightSerializer < ActiveModel::Serializer
  attributes :id, :flight_date, :airline, :airline_image, :from, :to, :seats, :cost
end
