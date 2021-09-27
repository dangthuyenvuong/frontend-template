import React from 'react'

const Shop: React.FC = () => {
    return (
        <div className="card card-lg">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                {/* Heading */}
                                                <div className="mb-5 font-weight-bold">Shop</div>
                                                {/* Links */}
                                                <ul className="list-styled mb-7 font-size-sm">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop.html">Default</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop-topbar.html">Topbar</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop-collapse.html">Collapse</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop-simple.html">Simple</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shop-masonry.html">Masonry</a>
                                                    </li>
                                                </ul>
                                                {/* Heading */}
                                                <div className="mb-5 font-weight-bold">Product</div>
                                                {/* Links */}
                                                <ul className="list-styled font-size-sm">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./product.html">Default</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./product-images-left.html">Images Left</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./product-image-grid.html">Image Grid</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./product-image-slider.html">Image Slider</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./product-images-stacked.html">Images Stacked</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                {/* Heading */}
                                                <div className="mb-5 font-weight-bold">Support</div>
                                                {/* Links */}
                                                <ul className="list-styled mb-7 font-size-sm">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shopping-cart.html">Shopping Cart</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./checkout.html">Checkout</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./order-completed.html">Order Completed</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./shipping-and-returns.html">Shipping &amp; Returns</a>
                                                    </li>
                                                </ul>
                                                {/* Heading */}
                                                <div className="mb-5 font-weight-bold">Account</div>
                                                {/* Links */}
                                                <ul className="list-styled font-size-sm">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-order.html">Order</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-orders.html">Orders</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-wishlist.html">Wishlist</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-personal-info.html">Personal Info</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-address.html">Addresses</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-address-edit.html">Addresses: New</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                {/* Links */}
                                                <ul className="list-styled mb-7 font-size-sm">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-payment.html">Payment</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-payment-edit.html">Payment: New</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./account-payment-choose.html">Payment: Choose</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./auth.html">Auth</a>
                                                    </li>
                                                </ul>
                                                {/* Heading */}
                                                <div className="mb-5 font-weight-bold">Modals</div>
                                                {/* Links */}
                                                <ul className="list-styled font-size-sm">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" data-toggle="modal" href="#modalNewsletterHorizontal">
                                                            Newsletter: Horizontal
                                                        </a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" data-toggle="modal" href="#modalNewsletterVertical">
                                                            Newsletter: Vertical
                                                        </a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" data-toggle="modal" href="#modalProduct">
                                                            Product
                                                        </a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" data-toggle="modal" href="#modalSearch">
                                                            Search
                                                        </a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" data-toggle="modal" href="#modalShoppingCart">
                                                            Shopping Cart
                                                        </a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" data-toggle="modal" href="#modalSizeChart">
                                                            Size Chart
                                                        </a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" data-toggle="modal" href="#modalWaitList">
                                                            Wait List
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    )
}

export default Shop
