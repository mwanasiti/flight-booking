class Api::UserProfilesController < ApplicationController
    def index
        profiles = UserProfile.all
        render json: profiles
    end

    def show
        profile = UserProfile.find_by(id: params[:id])
        render json: profile
    end

    def update
        user = @current_user.user_profile.update!(update_params)
        render json: user, status: :created
    end

    private

    def update_params
        params.permit(:name, :mail, :mobile, :id_passport, :gender, :user_id)
    end
end
