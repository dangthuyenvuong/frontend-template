import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

type PrivateRouterProp = any

const PrivateRouter: React.FC<PrivateRouterProp> = (props) => {
    let {login} = useSelector((store: any) => store.auth) as any
    if (login) {
        return <Route {...props}/>
    }
    return (
        <Redirect to="/auth/login"/>
    )
}

export default PrivateRouter
