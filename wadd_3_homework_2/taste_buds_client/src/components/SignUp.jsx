import { useState } from "react";
import { User } from "../request";
import { FloatingInput } from "./FloatingInput";


export function SignUp(props) {
    const [info, setInfo] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({
            ...info,
            [name]: value
        });
        console.log(info)
    }

    const signUp = () => {
        User.create(info)
                .then(data => {
                    console.log(data)
                })
    }

    return (
        <div className="signUp-main">
            <h1>Sign Up:</h1>
            <FloatingInput label="First Name" id='first_name' changeHandler={handleChange}/>
            <FloatingInput label='Last Name' id='last_name' changeHandler={handleChange}/>
            <FloatingInput label="Email" type='email' id="email" changeHandler={handleChange}/>
            <FloatingInput label="Password" type='password' id='password' changeHandler={handleChange}/>
            <FloatingInput label='Password Confirmation' type='password' id="password_confirmation" changeHandler={handleChange}/>
            <button className="btn btn-success mt-3" onClick={signUp}>Sign Up</button>
        </div>
    )

}