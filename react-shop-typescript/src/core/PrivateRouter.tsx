import { useSelector } from "react-redux"
import { Redirect, Route, RouterProps } from "react-router-dom"

type PrivateRouterProp = any

const PrivateRouter: React.FC<PrivateRouterProp> = (prop) => {
    let { login } = useSelector((store: any) => store.auth) as any
    
    if (login) {
        return <Route {...prop} />
    }

    return <Redirect to="/" />
}


export default PrivateRouter