import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Recipe } from "../request";
import { ReviewCreate } from "./ReviewCreate";
import show from '../image/show.jpg'



export function RecipeShowPage(props) {
    const { id } = useParams();
    const [ recipe, setRecipe ] = useState()
    const [ reviews, setReview ] = useState([])

    useEffect(() => {
        Recipe.show(id)
                .then(data => {
                    setRecipe(data)
                    setReview(data.reviews)
                })
    },[])

    const reviewSubmit = () => {
        Recipe.show(id)
                .then(data => {
                    setReview(data.reviews)
                })
    }

    return (
        <div className="w-screen h-screen flex">
            <div className="w-full h-fit min-h-full bg-cover bg-fixed bg-center text-white" style={{backgroundImage: `url(${show})`}}>
                <div className="w-full h-fit min-h-full bg-zinc-600 bg-opacity-60">
                    <div className="p-16">
                        <div className="p-10">
                            { recipe ? (
                                <>
                                    <p className="text-2xl text-white">Title: {recipe.title}</p>
                                    <div className="bg-cover bg-center w-96 h-96 rounded-3xl" style={{backgroundImage: `url(${recipe.image_url})`}}></div>
                                    <p>Story: {recipe.story}</p>
                                    <p>Description: {recipe.description}</p>
                                    <p>{recipe.salty}</p>
                                    <p>{recipe.salty ? (
                                        <>
                                            <p>Salty 🧂🧂🧂 !</p>
                                        </>
                                    ) : 
                                        <>
                                            <p>Not Salty!</p>
                                        </>
                                    }</p>
                                    <p>
                                        {recipe.sweet ? (
                                            <>
                                                <p>Sweet 🍭🍭🍭 !</p>
                                            </>
                                        ) : (
                                            <>
                                                <p>Not Sweet.</p>
                                            </>
                                        )}
                                    </p>
                                    <p>
                                        {recipe.spicy ? (
                                            <>
                                                <p>Spicy 🌶️🌶️🌶️ !</p>
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
                        <div>
                            <p>Create New Review:</p>
                            <ReviewCreate recipe_id={id} onSubmit={reviewSubmit}/>
                        </div>
                        <div>
                            <p>Reviews:</p>
                            <div>
                                { reviews.length ? (
                                    reviews.map((review, index) => {
                                        return (<div key={index}>
                                            <p>{review.rating}</p>
                                            <p>{review.body}</p>
                                        </div>)
                                    })
                                ) : (
                                    <p>No Review yet!</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}