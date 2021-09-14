import { RouterPram } from "core/routerConfig";
import { lazy } from "react";
import { AccoutLayout } from "../pages/account/_layout";
import { MainLayout } from "../pages/_layout/MainLayout";

export const routers: RouterPram[] = [
    {
        component: MainLayout,
        routers: [
            {
                path: '/account',
                component: AccoutLayout,
                routers: [
                    {
                        path: '/order',
                        exact: true,
                        component: lazy(() => import('../pages/account/order'))
                    },
                    {
                        exact: true,
                        component: lazy(() => import('../pages/account/info'))
                    },
                ]
            },
            {
                path: '/',
                exact: true,
                component: lazy(() => import('../pages/home'))
            },
        ]
    }
]