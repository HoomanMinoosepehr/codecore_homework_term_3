import { useState } from "react";
import { User } from "../request";
import { FloatingInput } from "./FloatingInput";
import { useNavigate } from "react-router-dom";


export function SignUp(props) {
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
        console.log(user)
    }

    const signUp = () => {
        console.log("user: ", user)
        User.create(user)
                .then(data => {
                    if (data.status === 200) {
                        setUser({})
                        props.onSignIn()
                        console.log(data)
                        navigate('/')
                    } else {

                    }
                })
    }

    return (
        <div className="signUp-main w-1/2 mt-36">
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