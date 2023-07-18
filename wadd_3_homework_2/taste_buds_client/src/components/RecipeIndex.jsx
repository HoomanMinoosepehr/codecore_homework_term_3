import { useEffect, useState } from "react";
import { Recipe } from "../request";

 


export function RecipeIndex(props) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        Recipe.index()
                .then(data => setRecipes(data))
    },[])

    return(
        <div>
            {recipes ? recipes.map((recipe, index) => {
                return <div key = {index} >
                        <h2>{recipe.title}</h2>
                        <p>{recipe.description}</p>
                    </div>
            }) : "There is no Recipe!"}
        </div>
    )

};