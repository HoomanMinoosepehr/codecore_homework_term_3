class Api::V1::UsersController < ApplicationController

    def create
        user = User.new user_params
        if user.save
            render json: { user: user, status: :ok }
        else
            render json: { message: user.errors.messages, status: 422}
        end
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
