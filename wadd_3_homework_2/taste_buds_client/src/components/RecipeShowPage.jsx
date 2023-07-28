import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Recipe } from "../request";
import { ReviewCreate } from "./ReviewCreate";



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
        <div className="p-16">
            <div>
                { recipe ? (
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
    )
}