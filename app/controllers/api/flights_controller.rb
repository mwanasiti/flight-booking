class Api::FlightsController < ApplicationController
    def index
        flights = Flight.all
        render json: flights, status: :ok
    end

    def show
        flight = Flight.find_by!(id: params[:id])
        render json: flight, status: :ok
    end
end
