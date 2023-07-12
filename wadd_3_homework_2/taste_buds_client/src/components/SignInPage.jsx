import { useState } from "react";
import { FloatingInput } from "./FloatingInput";
import { useNavigate } from "react-router-dom";



function SignInPage(props) {
    const navigate = useNavigate();
    const [info, setInfo] = useState({ email: '', password: '' })

    const changeHandler = (e) => {
        const [name, value] = e.target;
        setInfo({
            ...info,
            [name]: value
        })
    };

    const signIn = () => {
        
    }

    return (
        <div>
            <h1>Sign In:</h1>
            <FloatingInput id="email" label="Email" changeHandler={changeHandler}/>
            <FloatingInput id="password" type="password" label="Password" changeHandler={changeHandler}/>
            <button className="btn btn-success mt-3" onClick={signIn}>Sign In</button>
        </div>
    )
};

export default SignInPage