import { useEffect, useState } from "react";
import { Recipe } from "../request";
import { Link } from "react-router-dom";

 


export function RecipeIndex(props) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        Recipe.index()
                .then(data => setRecipes(data))
    },[])

    return(
        <div>
            {recipes ? recipes.map((recipe, index) => {
                return <div key = {index} className="py-16 px-8" >
                        <Link to={`/recipes/${recipe.id}`}><h2>{recipe.title}</h2></Link>
                        <p>{recipe.description}</p>
                    </div>
            }) : "There is no Recipe!"}
        </div>
    )

};