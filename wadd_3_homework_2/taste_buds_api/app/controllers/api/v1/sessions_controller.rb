class Api::V1::SessionsController < ApplicationController

    def create

        @user = User.find_by_email(sign_params[:email])
        if @user && @user.authenticate(sign_params[:password])
            render json: { user: @user, status: 200 }
        else
            render json: { message: "User name or Password is wrong!", status: 500 }
        end

    end


    private

    def sign_params
        params.require(:user).permit(
            :email,
            :password
        )
    end

end
