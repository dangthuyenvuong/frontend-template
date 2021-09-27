import React from 'react'
import AccountInfo from './accountInfo'
import AccountOrders from './accountOrders'
import Wishlist from './wishList'
import AccountLayout from './_layout'

function Account() {
    return (
        <AccountLayout>
            <AccountInfo />
            <AccountOrders />
            <Wishlist />
        </AccountLayout>
    )
}

export default Account
