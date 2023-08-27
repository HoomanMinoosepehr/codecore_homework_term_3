import { useState } from "react";
import { User } from "../request";
import sign_up from '../image/sign_up.jpg'
import { useNavigate } from "react-router-dom";
import { Input } from "./Input";
import { SuccessButton } from "./Button";


export function SignUp(props) {
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    const changeHandler = (e) => {
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
        <div className="w-full h-full flex flex-col bg-cover bg-center" style={{backgroundImage: `url(${sign_up})`}}>
            <div className="bg-zinc-600 bg-opacity-60 grow flex justify-center items-center">
                <div className="w-1/2 h-fit p-10 rounded-2xl bg-white bg-opacity-30">
                    <div className="w-full">
                        <h1 className="text-3xl text-yellow-300">Sign Up:</h1>

                        <Input
                        id='first_name'
                        label="Name"
                        onChange={changeHandler}
                        />

                        <Input
                        id='last_name'
                        label="SirName"
                        onChange={changeHandler}
                        />

                        <Input
                        id='email'
                        label="Email"
                        type="email"
                        onChange={changeHandler}
                        />

                        <Input
                        id='password'
                        label="Password"
                        type="password"
                        onChange={changeHandler}
                        />

                        <Input
                        id='password_confirmation'
                        label="Confirm Password"
                        type="password"
                        placeholder="Repeat password"
                        onChange={changeHandler}
                        />

                        <div className="w-full flex justify-center">
                            <SuccessButton
                            label="Sign up"
                            onClick={signUp}
                            other="w-1/4"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}
        // <div className="signUp-main w-1/2 mt-36">
        //     <h1>Sign Up:</h1>
        //     <FloatingInput label="First Name" id='first_name' changeHandler={handleChange}/>
        //     <FloatingInput label='Last Name' id='last_name' changeHandler={handleChange}/>
        //     <FloatingInput label="Email" type='email' id="email" changeHandler={handleChange}/>
        //     <FloatingInput label="Password" type='password' id='password' changeHandler={handleChange}/>
        //     <FloatingInput label='Password Confirmation' type='password' id="password_confirmation" changeHandler={handleChange}/>
        //     <button className="btn btn-success mt-3" onClick={signUp}>Sign Up</button>
        // </div>