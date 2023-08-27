import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export function AuthRoute(props) {

    const navigate = useNavigate();

    useEffect(() => {
        if(!props.isAuth) {
            navigate('/sign-in')
        }
    }, [props.isAuth, navigate])

    return props.isAuth ? props.page : null

}