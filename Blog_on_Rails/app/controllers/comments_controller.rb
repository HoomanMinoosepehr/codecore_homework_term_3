class CommentsController < ApplicationController

    before_action :authenticate_user!

    def create
       @post = Post.find params[:post_id]
       @comment = Comment.new post_params
       @comment.post = @post
       @comment.user_id = current_user.id
       @comment.save
       redirect_to post_path(@post)
    end

    def destroy
        @post = Post.find params[:post_id]
        @comment = Comment.find params[:id]
        authorize! :destroy, @post || :destroy, @comment
        @comment.destroy
        redirect_to post_path(@post)
    end

    private

    def post_params
        params.require(:comment).permit(
            :content
        )
    end

end
