import { useState } from "react"
import { TFSelect } from "./TFSelect";
import { Recipe } from "../request";
import newRecipe from '../image/newRecipe.jpg'
import { Input, TextArea } from "./Input";
import { SuccessButton } from "./Button";
import { useNavigate } from "react-router-dom";


export function RecipeNewPage(props) {
    const [ recipe, setRecipe ] = useState({spicy: 'false', sweet: 'false', salty:'false'})
    const navigate = useNavigate()

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setRecipe({
            ...recipe,
            [ name ]: value
        })
    };

    const submit = () => {
        Recipe.create({recipe})
                .then(data => {
                    if (data.status === 200) {
                        setRecipe({spicy: 'false', sweet: 'false', salty:'false'})
                        navigate('/recipes')
                    }
                })
    }


    return(
        <div className="w-full h-full flex flex-col bg-cover bg-center" style={{backgroundImage: `url(${newRecipe})`}}>
            <div className="bg-zinc-600 bg-opacity-60 grow flex justify-center items-center">
                <div className="w-1/2 h-fit p-10 rounded-2xl bg-white bg-opacity-30">
                    <div className="w-full">
                        <h1 className="text-3xl text-yellow-300">Create New Recipe:</h1>

                        <Input
                        id='image_url'
                        label="Image(url format):"
                        onChange={changeHandler}
                        />

                        <Input
                        id='title'
                        label='Title:'
                        onChange={changeHandler}
                        />

                        <TextArea
                        id='story'
                        label="Story:"
                        onChange={changeHandler}
                        />

                        <TextArea
                        id='description'
                        label="Description:"
                        onChange={changeHandler}
                        />

                        <Input
                        id='people_number'
                        type='number'
                        label='Number of People (serving size) (1-50):'
                        onChange={changeHandler}
                        />

                        <TFSelect changeHandler={changeHandler} id='spicy' label="Spicy🌶️:" />
                        <TFSelect changeHandler={changeHandler} id="salty" label="Salty🧂:"/>
                        <TFSelect changeHandler={changeHandler} id="sweet" label="Sweet🍭:"/>

                        <div className="w-full flex justify-center">

                            <SuccessButton
                            label="Save"
                            onClick={submit}
                            other="w-1/4"
                            />
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
        // <div className="p-20">
        //     <h2>Create New Recipe:</h2>
        //     <FloatingInput id='image_url' label="Image(url format):" changeHandler={changeHandler}/>
        //     <FloatingInput id='title' label='Title:' changeHandler={changeHandler}/>
        //     <FloatingText id='story' type='text' label="Story:" changeHandler={changeHandler}/>
        //     <FloatingText id='description' type='text' label="Description:" changeHandler={changeHandler}/>
        //     <FloatingInput id='people_number' type='number' label='Number of People (serving size) (1-50):' changeHandler={changeHandler}/>
        //     {/* <input type="checkbox" name="spicy" id="spicy" value={true} onChange={changeHandler} />
        //     <label htmlFor="spicy" className="text-red-700 focus:ring-1-red-700">Spicy</label><br/> */}
        //     <TFSelect changeHandler={changeHandler} id='spicy' label="Spicy" />
        //     <TFSelect changeHandler={changeHandler} id="salty" label="Salty"/>
        //     <TFSelect changeHandler={changeHandler} id="sweet" label="Sweet"/>
        //     <button className="btn btn-success m-2" onClick={submit}>Save</button>
        // </div>