class PostsController < ApplicationController

    before_action :authenticate_user! , except: [:index, :show]

    def index
        @posts = Post.all.order(created_at: :desc)
    end

    def show
        @post = Post.find(params[:id])
        @comments = Comment.new
    end

    def new
        @post = Post.new
    end

    def create
        @post = Post.new post_params
        @post.user_id = current_user.id
        if @post.save
            redirect_to root_path
        else
            flash[:warning] = "Something went wrong, please try again!"
            redirect_to new_post_path
        end
    end

    def destroy
        @post = Post.find params[:id]
        authorize! :destroy, @post
        if @post.destroy
            redirect_to root_path
        else
            redirect_to post_path(@post)
        end
    end

    def edit
        @post = Post.find params[:id]
        authorize! :edit, @post
    end

    def update
        @new_post = post_params
        @post = Post.find params[:id]
        authorize! :update, @post
        if @post.update @new_post
            redirect_to root_path
        else
            redirect_to post_path(@post)
        end
    end

    private

    def post_params
        params.require(:post).permit(
            :title,
            :body
        )
    end

end
