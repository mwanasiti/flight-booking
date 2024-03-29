class ApplicationController < ActionController::API

    include ActionController::Cookies
  
    rescue_from ActiveRecord::RecordInvalid, with: :render_entity_unread
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  
    before_action :authorize
  
    private
  
    def authorize
      @current_user = User.find_by(id: session[:user_id])
  
      render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end

    def render_not_found_response
      render json: { error: " Item Not Found"}, status: :not_found
    end
  
    def render_entity_unread(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
  
end