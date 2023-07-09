class SessionsController < ApplicationController

    def new

    end

    def create
        @user = User.find_by_email params[:email]
        if @user && @user.authenticate(params[:password])
            session[:user_id] = @user.id
            redirect_to root_path
            flash[:primary] = "You have logged in successfully!"
        else
            flash[:danger] = "Wrong username or password! try again."
            render :new
        end
    end

    def destroy
        session[:user_id] = nil
        flash[:danger] = "You are logged out!"
        redirect_to root_path
    end

end
