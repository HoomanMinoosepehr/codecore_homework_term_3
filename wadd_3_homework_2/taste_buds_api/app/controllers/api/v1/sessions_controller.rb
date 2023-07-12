class Api::V1::SessionsController < ApplicationController

    def create

        @user = User.find_by_email(sign_params[:email])
        if @user && @user.authenticate(sign_params[:password])
            session[:user_id] = @user.id
            render json: { user: @user, status: 200 }
        else
            render json: { message: "User name or Password is wrong!", status: 500 }
        end

    end

    def destroy
        session[:user_id] = nil
        render json: { message: "You've successfully logged out."}
    end


    private

    def sign_params
        params.require(:user).permit(
            :email,
            :password
        )
    end

end
