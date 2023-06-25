class Api::V1::PostsController < Api::ApplicationController

    def index
        posts = Post.all
        render json: posts
    end

    def show
        post = Post.find params[:id]
        render json: post
    end

    def create
        post = Post.new new_post
        post.user_id = 1
        if post.save
            render json: {post:post,message: 'Post has created successfully!'}
        else
            render json: {message: post.errors.messages}
        end 
    end

    def update
        old_post = Post.find params[:id];
        if old_post.update new_post
            render json: {message: 'Post has updated successfully!'}
        else
            render json: {message: post.errors.messages}
        end

    end

    def destroy 
        post = Post.find params[:id]
        if post.destroy
            render json: {message: "Post has been deleted successfully!"}
        else
            render json: {message: post.errors.messages}
        end
    end

    private 

    def new_post
        params.require(:post).permit(
            :title,
            :body
        )
    end

end
