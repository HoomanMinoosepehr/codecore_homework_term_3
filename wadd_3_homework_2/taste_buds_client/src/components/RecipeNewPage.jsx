import { useState } from "react"
import { FloatingInput } from "./FloatingInput"
import { FloatingText } from "./FloatingText";


export function RecipeNewPage(props) {
    const [ recipe, setRecipe ] = useState({})

    const onChange = (e) => {
        const {name, value} = e.target;
        setRecipe({
            ...recipe,
            [ name ]: value
        })
    };


    return(
        <div>
            <h2>Create New Recipe:</h2>
            <FloatingInput id='image_url' label="Image(url format):" onChange={onChange}/>
            <FloatingInput id='title' label='Title:' onChange={onChange}/>
            <FloatingText id='story' type='text' label="Story:" onChange={onChange}/>
            <FloatingText id='description' type='text' label="Description:" onChange={onChange}/>
            <FloatingInput id='people_number' type='number' label='Number of People (serving size) (1-50):' onChange={onChange}/>
            <input type="checkbox" name="spicy" id="spicy" value={true}  />
            <label htmlFor="spicy" className="text-red-700 focus:ring-1-red-700">Spicy</label><br/>
            <input type="checkbox" name="salty" id="salty" value={true}  />
            <label htmlFor="salty" className="text-blue-900">Salty</label>
        </div>
    )
}