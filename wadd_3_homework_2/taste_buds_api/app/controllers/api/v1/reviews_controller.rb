class Api::V1::ReviewsController < ApplicationController

    def create

        review = Review.new review_params
        recipe = Recipe.find params[:recipe_id]
        review.user = current_user
        review.recipe = recipe

        if review.save
            render json: { message: "Your review was added successsfully!", status: 200 }
        else
            render json: { message: review.errors.messages, status: 422 }
        end

    end

    def destroy

        review = Review.find params[:id]
        if review.destroy
            render json: { message: "Review was deleted successfully!", status: 200 }
        else
            render json: { message: "Something went wrong, please try again.", status: 422 }
        end
        
    end

    private

    def review_params
        params.require(:review).permit(
            :rating,
            :body
        )
    end

end
