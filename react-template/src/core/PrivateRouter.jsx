import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router-dom"

export default function PrivateRouter(prop){
    let { login } = useSelector(store => store.auth)
    if(login){
        return <Route {...prop}/>
    }

    return <Redirect path="/" />
}