import { useState } from "react"
import { FloatingInput } from "./FloatingInput"
import { FloatingText } from "./FloatingText";
import { TFSelect } from "./TFSelect";
import { Recipe } from "../request";


export function RecipeNewPage(props) {
    const [ recipe, setRecipe ] = useState({spicy: 'false', sweet: 'false', salty:'false'})

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setRecipe({
            ...recipe,
            [ name ]: value
        })
        console.log(recipe)
    };

    const submit = () => {
        Recipe.create({recipe})
                .then(data => {
                    if (data.status === 200) {
                        setRecipe({spicy: 'false', sweet: 'false', salty:'false'})
                    }
                })
    }


    return(
        <div className="p-20">
            <h2>Create New Recipe:</h2>
            <FloatingInput id='image_url' label="Image(url format):" changeHandler={changeHandler}/>
            <FloatingInput id='title' label='Title:' changeHandler={changeHandler}/>
            <FloatingText id='story' type='text' label="Story:" changeHandler={changeHandler}/>
            <FloatingText id='description' type='text' label="Description:" changeHandler={changeHandler}/>
            <FloatingInput id='people_number' type='number' label='Number of People (serving size) (1-50):' changeHandler={changeHandler}/>
            {/* <input type="checkbox" name="spicy" id="spicy" value={true} onChange={changeHandler} />
            <label htmlFor="spicy" className="text-red-700 focus:ring-1-red-700">Spicy</label><br/> */}
            <TFSelect changeHandler={changeHandler} id='spicy' label="Spicy" />
            <TFSelect changeHandler={changeHandler} id="salty" label="Salty"/>
            <TFSelect changeHandler={changeHandler} id="sweet" label="Sweet"/>
            <button className="btn btn-success m-2" onClick={submit}>Save</button>
        </div>
    )
}