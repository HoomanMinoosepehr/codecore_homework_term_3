class ApplicationController < ActionController::Base

    def authenticate_user!
        unless user_signed_in?
        flash[:danger] = "You need to sign in first!"
        redirect_to session_new_path
        end
    end

    rescue_from CanCan::AccessDenied do |exception|
        flash[:danger] = "Access Denied!"
        redirect_to root_path
    end

    private

    def user_signed_in?
        current_user.present?
    end
    helper_method :user_signed_in?

    def current_user
        @current_user ||= User.find_by_id session[:user_id]
    end
    helper_method :current_user

end
