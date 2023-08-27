class Api::V1::UsersController < ApplicationController

    def create
        @user = User.new user_params
        @user.password = params[:password]
        @user.password_confirmation = params[:password_confirmation]
        if @user.save
            session[:user_id] = @user.id
            render json: { user: @user, status: 200 }
        else
            render json: { message: @user.errors.messages, status: 422}
        end
    end

    def current
        render json: current_user
    end

    private

    def user_params
        params.require(:user).permit(
            :first_name,
            :last_name,
            :email,
            :password,
            :password_confirmation 
        )
    end

end
