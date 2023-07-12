class Api::V1::UsersController < ApplicationController

    def create
        @user = User.new user_params
        p 'zzzzzz',user_params
        p "user: ", @user
        p "params[password]: ", params[:password]
        @user.password = params[:password]
        @user.password_confirmation = params[:password_confirmation]
        if @user.save
            render json: { user: @user, status: :ok }
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
