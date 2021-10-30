import { lazy } from 'react'

import Home from '../pages/home'
import MainLayout from 'pages/_layout/MainLayout'
import Page404 from '../pages/404'
import { RouterParam } from 'core'
import AccountLayout from 'pages/account/_layout'
import AuthLayout from 'pages/_layout/AuthLayout'
import ProductPage from 'pages/product'

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
                path: '/checkout',
                component: lazy(() => import('../pages/checkout')),
                exact: true
            },
            {
                path: '/order-completed/:id',
                component: lazy(() => import('../pages/order_completed')),
                exact: true
            },
            {
                path: '/view-cart',
                component: lazy(() => import('../pages/view_cart')),
                exact: true
            },
            {
                path: '/product',
                component: ProductPage,
                exact: true,
                // auth: true,
                // auth: 'product:view'
                auth: 'editor',

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


