class UsersController < ApplicationController

    before_action :authenticate_user!, except: [:new , :create]

    def new
        @user = User.new
    end

    def create
        @user_param = params.require(:user).permit(
            :name,
            :email,
            :password,
            :password_confirmation
        )

        @user = User.new(@user_param)
        
        if @user.save
            session[:user_id] = @user.id
            flash[:success] = "You have made your account successfully and you are logged in!"
            redirect_to root_path
        else
            render :new
        end
    end

    def edit
        @user = User.find params[:id]
        authorize! :edit, @user
    end

    def update
        @user = User.find params[:id]
        authorize! :update, @user
        @new_user = params.require(:user).permit(:name , :email)
        if @user.update @new_user
            redirect_to root_path
            flash[:success] = "User info has been seccessfully changed"
        else
            render :edit
            flash[:danger] = "Info hasn't changed!!"
        end
    end

    def passedit
        @user = User.find params[:user_id]
        authorize! :passedit, @user
    end

    def passupdate
        @user = User.find params[:user_id]
        authorize! :passupdate, @user
        if @user.authenticate(params.require(:user).permit(:current_pass)[:current_pass])
            if @user.update params.require(:user).permit(:password , :password_confirmation)
                session[:user_id] = nil
                flash[:success] = "Password has changed successfully!"
                redirect_to session_new_path
            else
                flash[:danger] =  "Something went wrong!"
                render :passedit
            end
        else
            flash[:danger] =  "Current Password is Wrong!"
            render :passedit
        end
    end

end
