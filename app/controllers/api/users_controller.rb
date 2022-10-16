class Api::UsersController < ApplicationController

    skip_before_action :authorize, only: [:create]
    
    def create
        ActiveRecord::Base.transaction do
            @user = User.create!(user_params)
            session[:user_id] = @user.id
            render json: @user, status: :created

            UserProfile.create!(
                name: @user.username,
                user_id: @user.id
            )
        end
        
    end

    def show
        user = User.find_by(id: session[:user_id])
        
        render json: user
    end

    private
    
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
