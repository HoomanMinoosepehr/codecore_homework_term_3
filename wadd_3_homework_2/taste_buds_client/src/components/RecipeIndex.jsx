import { useEffect, useState } from "react";
import { Recipe } from "../request";
import { Link } from "react-router-dom";
import index from '../image/index.jpg'
import { RedButton } from "./Button";

 


export function RecipeIndex(props) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        Recipe.index()
                .then(data => setRecipes(data))
    },[])

    const destroy = (id) => {
        Recipe.delete(id)
                .then(data => {
                    if (data.status === 200){
                        setRecipes([]);
                        onUpdate()
                    }
                })
    }

    const onUpdate = () => {
        Recipe.index()
                .then(data => setRecipes(data))
    }

    return(
        <div className="w-screen h-screen">
            <div className="w-full min-h-full h-fit flex bg-blue-300 bg-cover bg-fixed bg-center" style={{backgroundImage: `url(${index})`}}>
                <div className="bg-zinc-600 min-h-full bg-opacity-60 pt-16 px-10 grow flex flex-col">
                    <h1 className="text-2xl text-white">Recipes:</h1>
                    <div className="mt-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grow">
                        {recipes.length != 0 ? recipes.map((recipe, index) => {
                            return <div key = {index} className="flex flex-col justify-center items-center" >
                                <div
                                className="flex flex-col items-center rounded-md w-3/4 mb-3 bg-white bg-opacity-30 p-5"
                                >
                                    <div
                                    className="rounded-full w-44 h-44"
                                    style={{backgroundImage: `url(${recipe.image_url})`}}
                                    ></div>
                                    <Link to={`/recipes/${recipe.id}`}><h2>{recipe.title}</h2></Link>
                                </div>
                                    <RedButton onClick={() => destroy(recipe.id)} label='Delete' />
                                </div>
                        }) : <h1 className="text-4xl m-7 text-yellow-400">There is no Recipe!</h1>}
                    </div>
                </div>
            </div>
        </div>
    )

};