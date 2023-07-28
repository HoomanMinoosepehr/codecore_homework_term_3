import { useState } from "react";
import { FloatingInput } from "./FloatingInput";
import { useNavigate } from "react-router-dom";
import { Sessions } from "../request";



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
        <div className="p-20">
            <div className="w-1/2">
                <h1>Sign In:</h1>
                <FloatingInput id="email" label="Email" changeHandler={changeHandler}/>
                <FloatingInput id="password" type="password" label="Password" changeHandler={changeHandler}/>
                <button className="btn btn-success mt-3" onClick={signIn}>Sign In</button>
            </div>
        </div>
    )
};

export default SignInPage