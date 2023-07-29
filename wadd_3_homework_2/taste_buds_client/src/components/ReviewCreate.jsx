import { useState } from "react";
import { FloatingInput } from "./FloatingInput";
import { Review } from "../request";
import { SuccessButton } from "./Button";
import { Input, TextArea } from "./Input";


export function ReviewCreate(props) {

    const [ review, setReview ] = useState({});


    const changeHandler = (e) => {
        const { name, value } = e.target;
        setReview({
            ...review,
            [name]: value
        })
        console.log(review)
    }

    const submit = () => {
        Review.create(props.recipe_id,{ review })
                .then(data => {
                    if (data.status === 200){
                        props.onSubmit()
                    } else {

                    }
                })
    }


    return (
            <div className="border text-black rounded-md p-5">
                <label htmlFor="rating" className="px-1">Rating:</label>
                <select onChange={changeHandler} id="rating" name="rating">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                {/* <FloatingInput id='body' label="Review" changeHandler={changeHandler}/> */}
                <TextArea id='body' label='Review' onChange={changeHandler} placeholder='Add Your Review ...' />
                <SuccessButton onClick={submit} label='Submit' />
            </div>
    )
}