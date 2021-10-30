import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { RootState } from 'store'

type PrivateRouterProp = {
    auth?: string | boolean
} & any

const PrivateRouter: React.FC<PrivateRouterProp> = (props) => {
    let { login, permission, role } = useSelector((store: RootState) => store.auth)
    

    let { auth } = props

    

    if (login && role) {

        if (typeof auth === 'string') {
            if(role === auth || permission.indexOf(auth) !== -1){
                return <Route {...props} />
            }else{
                return <Redirect to="/" />
            }
        }

        return <Route {...props} />
    }

    return (
        <Redirect to="/auth/login" />
    )
}

export default PrivateRouter


const role = 'editor' 

// permission = 'product:view'


let user = {
    // username, 
    // password,
    // name,
    // avatar
    role: 'editor'
}