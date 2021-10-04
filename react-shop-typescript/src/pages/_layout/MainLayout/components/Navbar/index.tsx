import { useTranslate } from 'core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { StateStore } from 'store'
import { toggleCart } from 'store/actions/cartAction'
import { useCartNumber } from 'store/selector'
import Blog from './components/Blog'
import CatalogCard from './components/CatalogCard'
import HomeCard from './components/HomeCard'
import Pages from './components/Pages'
import Shop from './components/Shop'

type NavbarProp = {
    hoverEvent: React.MouseEventHandler<HTMLElement>,
    mouseLeaveEvent: React.MouseEventHandler<HTMLElement>
}

const Navbar: React.FC<NavbarProp> = ({ hoverEvent, mouseLeaveEvent }) => {
    const { t } = useTranslate()
    const dispatch = useDispatch()

    let num = useCartNumber()

    function _openCartModal(ev: React.MouseEvent) {
        ev.preventDefault()
        dispatch(toggleCart(true))

    }

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            {console.log('Navbar here')}
            <div className="container">
                {/* Brand */}
                <a className="navbar-brand" href="./overview.html">
                    Shopper.
                </a>
                {/* Toggler */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                {/* Collapse */}
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    {/* Nav */}
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item dropdown hovered" onMouseOver={hoverEvent} onMouseLeave={mouseLeaveEvent}>
                            {/* Toggle */}
                            <Link className="nav-link" data-toggle="dropdown" to="#" aria-expanded="true">Home</Link>
                            {/* Menu */}
                            <div className="dropdown-menu">to
                                <HomeCard />
                            </div>
                        </li>
                        <li className="nav-item dropdown position-static" onMouseOver={hoverEvent} onMouseLeave={mouseLeaveEvent}>
                            {/* Toggle */}
                            <Link className="nav-link" data-toggle="dropdown" to="/product">{t('Product')}</Link>
                            {/* Menu */}
                            <div className="dropdown-menu w-100">
                                <CatalogCard />
                            </div>
                        </li>
                        <li className="nav-item dropdown" onMouseOver={hoverEvent} onMouseLeave={mouseLeaveEvent}>
                            {/* Toggle */}
                            <Link className="nav-link" data-toggle="dropdown" to="#">Shop</Link>
                            {/* Menu */}
                            <div className="dropdown-menu" style={{ minWidth: '650px' }}>
                                <Shop />
                            </div>
                        </li>
                        <li className="nav-item dropdown hovered" onMouseOver={hoverEvent} onMouseLeave={mouseLeaveEvent}>
                            {/* Toggle */}
                            <Link className="nav-link" data-toggle="dropdown" to="#" aria-expanded="true">Pages</Link>
                            {/* Menu */}
                            <div className="dropdown-menu">
                                <Pages />
                            </div>
                        </li>
                        <li className="nav-item dropdown hovered" onMouseOver={hoverEvent} onMouseLeave={mouseLeaveEvent}>
                            {/* Toggle */}
                            <Link className="nav-link" data-toggle="dropdown" to="#" aria-expanded="true">Blog</Link>
                            {/* Menu */}
                            <div className="dropdown-menu">
                                <Blog />
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="docs/getting-started.html">Docs</a>
                        </li>
                    </ul>
                    {/* Nav */}
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="modal" href="#modalSearch">
                                <i className="fe fe-search" />
                            </a>
                        </li>
                        <li className="nav-item ml-lg-n4">
                            <Link className="nav-link" to="/account/info">
                                <i className="fe fe-user" />
                            </Link>
                        </li>
                        <li className="nav-item ml-lg-n4">
                            <Link className="nav-link" to="/account/wishlist" >
                                <i className="fe fe-heart" />
                            </Link>
                        </li>
                        <li className="nav-item ml-lg-n4">
                            <a className="nav-link" data-toggle="modal" href="#" onClick={_openCartModal}>
                                <span data-cart-items={num}>
                                    <i className="fe fe-shopping-cart" />
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
