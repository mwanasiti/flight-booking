class Api::UserRatingsController < ApplicationController


    def index
        ratings = UserRating.all
        render json: ratings
    end

    def show
        rating = find_rating
        render json: rating
    end

    def create
        rating = @current_user.user_ratings.create(ratings_params)
        render json: rating, status: :created
    end

    def update
        ratings = find_rating
        ratings.update(ratings_params)
        render json: ratings
    end

    def destroy
        rating = find_rating
        rating.destroy
        head :no_content
    end

    private

    def find_rating
        UserRating.find_by(id: params[:id])
    end

    def ratings_params
        params.permit(:image, :name, :rating, :reason)
    end

end
