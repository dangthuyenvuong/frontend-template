import { Route, Switch } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";

export type RouterPram = {
    path?: string,
    component: any,
    exact?: true
    auth?: true
    routers?: RouterPram[]
}


export function routerConfig(routers: RouterPram[], parentPath = '') {

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

        if (auth) {
            list.push(<PrivateRouter path={parentPath + path} exact={exact} render={(props: any) => <Component {...props}>{children}</Component>} />)
        } else {

            list.push(<Route path={parentPath + path} exact={exact} render={(props: any) => <Component {...props}>{children}</Component>} />)
        }

    }


    return <Switch>
        {list}
    </Switch>
}