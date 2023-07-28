import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Recipe } from "../request";



export function RecipeShowPage(props) {
    const { id } = useParams();
    const [ recipe, setRecipe ] = useState({})

    useEffect(() => {
        Recipe.show(id)
                .then(data => {
                    setRecipe(data)
                    console.log(data)
                })
    },[])

    return (
        <div className="p-16">
            { recipe.title ? (
                <>
                    <p>{recipe.title}</p>
                    <p>{recipe.description}</p>
                    <p>{recipe.salty}</p>
                    <p>{recipe.salty ? (
                        <>
                            <p>Salty</p>
                        </>
                    ) : 
                        <>
                            <p>No Salty</p>
                        </>
                    }</p>
                    <p>
                        {recipe.sweet ? (
                            <>
                                <p>Sweet!</p>
                            </>
                        ) : (
                            <>
                                <p>Not Sweet.</p>
                            </>
                        )}
                    </p>

                    <p>By: {recipe.owner.first_name}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}