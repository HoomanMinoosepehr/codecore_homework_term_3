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
    };

    const signIn = () => {
        console.log("user:", user)
        Sessions.create({user})
                    .then(data => {
                        if(data.status === 200){
                            setUser({ email: '', password: ''})
                            console.log(data)
                            navigate("/")
                        }
                    })
    };

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