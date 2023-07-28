import { useState } from "react";
import { FloatingInput } from "./FloatingInput";
import { Review } from "../request";


export function ReviewCreate(props) {

    const [ review, setReview ] = useState({});


    const changeHandler = (e) => {
        const { name, value } = e.target;
        setReview({
            ...review,
            [name]: value
        })
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
        <div className="border rounded-md p-5">
            <label htmlFor="rating">Rating</label>
            <select name="rating" onChange={changeHandler} id="rating">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <FloatingInput id='body' label="Review" changeHandler={changeHandler}/>
            <button onClick={submit}>Submit</button>
        </div>
    )
}