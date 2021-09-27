import React from 'react'
import { Link } from 'react-router-dom'
import Blog from './components/Blog'
import CatalogCard from './components/CatalogCard'
import HomeCard from './components/HomeCard'
import Pages from './components/Pages'
import Shop from './components/Shop'

type NavbarProp = {
    hoverEvent: React.MouseEventHandler<HTMLElement>,
    mouseLeaveEvent: React.MouseEventHandler<HTMLElement>
}

const Navbar: React.FC<NavbarProp> = ({hoverEvent, mouseLeaveEvent}) => {

    function _openCartModal() {
        let modal = document.getElementById("modalShoppingCart")
        if(modal) {
            modal.classList.add('show')
            modal.style.display = 'block'
            modal.style.transition = "all 2s ease-out"
            modal.style.paddingRight = '19px'           
            modal.removeAttribute('aria-hidden')
            modal.setAttribute('aria-modal', 'true')
            // modal.style.transition = 'all .2s ease-in-out'
        }
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
                                <HomeCard/>
                            </div>
                        </li>
                        <li className="nav-item dropdown position-static" onMouseOver={hoverEvent} onMouseLeave={mouseLeaveEvent}>
                            {/* Toggle */}
                            <Link className="nav-link" data-toggle="dropdown" to="#">Catalog</Link>
                            {/* Menu */}
                            <div className="dropdown-menu w-100">
                                <CatalogCard/>
                            </div>
                        </li>
                        <li className="nav-item dropdown" onMouseOver={hoverEvent} onMouseLeave={mouseLeaveEvent}>
                            {/* Toggle */}
                            <Link className="nav-link" data-toggle="dropdown" to="#">Shop</Link>
                            {/* Menu */}
                            <div className="dropdown-menu" style={{ minWidth: '650px' }}>
                                <Shop/>
                            </div>
                        </li>
                        <li className="nav-item dropdown hovered" onMouseOver={hoverEvent} onMouseLeave={mouseLeaveEvent}>
                            {/* Toggle */}
                            <Link className="nav-link" data-toggle="dropdown" to="#" aria-expanded="true">Pages</Link>
                            {/* Menu */}
                            <div className="dropdown-menu">
                                <Pages/>
                            </div>
                        </li>
                        <li className="nav-item dropdown hovered" onMouseOver={hoverEvent} onMouseLeave={mouseLeaveEvent}>
                            {/* Toggle */}
                            <Link className="nav-link" data-toggle="dropdown" to="#" aria-expanded="true">Blog</Link>
                            {/* Menu */}
                            <div className="dropdown-menu">
                                <Blog/>
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
                            <Link className="nav-link" data-toggle="modal" to="#" onClick={_openCartModal}>
                                <span data-cart-items={2}>
                                    <i className="fe fe-shopping-cart" />
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
