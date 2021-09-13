import { Route, Switch } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";

export function routerConfig(routers, parentPath = '') {

    let list = []

    for (let i in routers) {
        let {
            component: Component,
            path = '',
            exact,
            routers: routerChildren,
            auth
        } = routers[i]

        let children = []
        if (routerChildren) {
            children = routerConfig(routerChildren, parentPath + path)
        }



        if (auth) {
            list.push(<PrivateRouter key={parentPath + path} path={parentPath + path} exact={exact} render={(props) => <Component {...props}>{children}</Component>} />)
        } else {
            console.log(parentPath + path)

            list.push(<Route key={parentPath + path} path={parentPath + path} exact={exact} render={(props) => <Component {...props}>{children}</Component>} />)
        }

    }


    return <Switch>
        {list}
    </Switch>
}