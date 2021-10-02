import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {  NavLink } from 'react-router-dom'
import { authLogoutAction } from 'store/actions/authAction'

const AccountLayout: React.FC = ({ children }) => {
    // function navbarHandle(event: any) {
    //     event.preventDefault()
    // }

    let dispatch = useDispatch()
    const logout = useCallback((ev: React.MouseEvent) => {
        ev.preventDefault()
        dispatch(authLogoutAction())
    }, [])
    return (
        <div className="account-layout">
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            {/* Heading */}
                            <h3 className="mb-10">My Account</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            {/* Nav */}
                            <nav className="mb-10 mb-md-0">
                                <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                                    <NavLink className="list-group-item list-group-item-action dropright-toggle " to="/account/info">
                                        Personal Info
                                    </NavLink>
                                    <NavLink className="list-group-item list-group-item-action dropright-toggle " to="/account/orders"> {/*active*/}
                                        Orders
                                    </NavLink>
                                    <NavLink className="list-group-item list-group-item-action dropright-toggle " to="/account/wishlist">
                                        Wishlist
                                    </NavLink>

                                    {/* <NavLink className="list-group-item list-group-item-action dropright-toggle " href="account-address.html">
                                        Addresses
                                    </NavLink>
                                    <NavLink className="list-group-item list-group-item-action dropright-toggle " href="account-payment.html">
                                        Payment Methods
                                    </NavLink> */}
                                    <a className="list-group-item list-group-item-action dropright-toggle" onClick={logout} href="#">
                                        Logout
                                    </a>
                                </div>
                            </nav>
                        </div>
                        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default AccountLayout
