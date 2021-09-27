import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRouter from './PrivateRouter'


export type RouterParam = {
    path?: string,
    component: any,
    exact?: true,
    auth?: boolean,
    routers?: RouterParam[]
}

export function routerConfig(routers: RouterParam[], parentPath = '') {
    let list: any[] = []
    for (let i in routers) {
        let {
            component: Component,
            path = '',
            exact,
            routers: routerChildren,
            auth
        } = routers[i]

        let children: any = []
        if (routerChildren) {
            children = routerConfig(routerChildren, parentPath + path)
        }

        if (auth === true) {
            list.push(<PrivateRouter key={parentPath + path} path={parentPath + path} exact={exact} render={(props: any) => <Component {...props}>{children}</Component>}></PrivateRouter>)
        } else {

            list.push(<Route key={parentPath + path} path={parentPath + path} exact={exact}>
                <Component>
                    {children}
                </Component>
            </Route>)
        }

    }

    return (
        <Switch>
            {list}
        </Switch>
    )
}

// export function routerConfig(routers, parentPath = '') {
//     let list = []
//     for (let i in routers) {
//         let {
//             component: Component,
//             path = '',
//             exact,
//             routers: routerChildren,
//             auth
//         } = routers[i]

//         let children = []
//         if (routerChildren) {
//             children = routerConfig(routerChildren, parentPath + path)
//         }

//         if(auth) {
//             list.push(<PrivateRouter path={parentPath + path} exact={exact} render={(props) => <Component {...props}>{children}</Component>}></PrivateRouter>)
//         } else {
//             list.push(<Route path={parentPath + path} exact={exact} render={(props) => <Component {...props}>{children}</Component>}></Route>)
//         }
//     }
//     return (
//         <Switch>
//             {list}
//         </Switch>
//     )
// }



