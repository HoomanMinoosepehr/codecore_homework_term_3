import { useState } from "react";
import { FloatingInput } from "./FloatingInput";
import { useNavigate } from "react-router-dom";
import { Sessions } from "../request";
import sign_in from '../image/sign_in.jpg';
import { Input } from "./Input";
import { SuccessButton } from "./Button";



function SignInPage(props) {
    const navigate = useNavigate();
    const [user, setUser] = useState({ email: '', password: '' })

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
        console.log(user)
    };

    const signIn = () => {
        Sessions.create({user})
                    .then(data => {
                        if(data.status === 200){
                            setUser({ email: '', password: ''})
                            props.onSignIn()
                            navigate("/")
                        }
                    })
    };

    return (
        <div className="w-full h-full flex flex-col bg-cover bg-center" style={{backgroundImage: `url(${sign_in})`}}>
            <div className="bg-zinc-600 bg-opacity-60 grow flex justify-center items-center">
                <div className="w-1/2 h-fit p-10 rounded-2xl bg-white bg-opacity-30">
                    <div className="w-full">
                        <h1 className="text-3xl text-yellow-300">Sign In:</h1>

                        <Input
                        id='email'
                        label="Email"
                        type="email"
                        placeholder="Email Adress"
                        onChange={changeHandler}
                        />

                        <Input
                        id='password'
                        label="Password"
                        type="password"
                        placeholder="Secret"
                        onChange={changeHandler}
                        />

                        <div className="w-full flex justify-center">
                            <SuccessButton
                            label="Sign In"
                            onClick={signIn}
                            other="w-1/4"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default SignInPage