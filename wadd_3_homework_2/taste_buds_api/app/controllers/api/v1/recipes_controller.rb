class Api::V1::RecipesController < ApplicationController

    def index
        recipes = Recipe.all
        render json: recipes, each_serializer: RecipeSerializer
    end

    def show
        recipe = Recipe.find params[:id]
        render json: recipe, serializer: RecipeShowSerializer
    end

    def create
        @recipe = Recipe.new recipe_params
        @recipe.user = current_user;
        if @recipe.save
            render json: { message: 'Recipe was created successfully!', status: 200, recipe_id: @recipe.id }
        else
            render json: { message: @recipe.errors.messages, status: 422}
        end
    end

    def destroy
        @recipe = Recipe.find params[:id]
        if @recipe.destroy
            render json: { message: "Recipe was deleted successfully!", status: 200 }
        else
            render json: { message: "Something went Wrong! Please try again.", status: 422}
        end
    end

    private

    def recipe_params
        params.require(:recipe).permit(:title, :story, :description, :people_number, :spicy, :salty, :sweet)
    end

end
