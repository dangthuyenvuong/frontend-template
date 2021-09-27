import React, { lazy } from 'react'
import Account from '../pages/account'

import Home from '../pages/home'
import MainLayout from 'pages/_layout/MainLayout'
import Page404 from '../pages/404'
import { RouterParam } from 'core'
import AccountLayout from 'pages/account/_layout'
import AuthLayout from 'pages/_layout/AuthLayout'

export const routers: RouterParam[] = [
    {
        component: MainLayout,
        routers: [
            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                path: '/auth',
                component: AuthLayout,
                auth: false,
                routers: [
                    {
                        path: '/login',
                        component: lazy(() => import('../pages/auth/login')),
                        exact: true,
                    },
                    {
                        path: '/register',
                        component: lazy(() => import('../pages/auth/register')),
                        exact: true,
                    },
                ]
            },
            {
                path: '/account',
                component: AccountLayout,
                auth: true,
                routers: [
                    {
                        path: '/info',
                        component: lazy(() => import('../pages/account/accountInfo')),
                        exact: true,
                    },
                    {
                        path: '/orders',
                        component: lazy(() => import('../pages/account/accountOrders')),
                        exact: true,
                    },
                    {
                        path: '/wishlist',
                        component: lazy(() => import('../pages/account/wishList'))
                    },
                ]
            },
            {
                component: Page404
            }
        ]
    }
]


