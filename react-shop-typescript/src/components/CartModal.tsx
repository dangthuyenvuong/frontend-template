import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

export const CartModal: React.FC = () => {

    function _closeCartModal() {
        const modal = document.getElementById('modalShoppingCart')
        if( modal ) {
            modal.style.display = 'none'
            modal.style.transition = 'all 2s'
            modal.removeAttribute('aria-modal')
            modal.setAttribute('aria-hidden', 'true')
            // modal.style.paddingRight='0px'
            modal.style.removeProperty('padding-right')
            modal.classList.remove('show')
        }
    }

    return ReactDOM.createPortal(
        <div className="modal fixed-right fade" id="modalShoppingCart" tabIndex={-1} role="dialog" aria-hidden="true"> 
            <div className="modal-dialog modal-dialog-vertical" role="document">
                {/* Full cart (add `.d-none` to disable it) */}
                <div className="modal-content">
                    {/* Close */}
                    <Link type="button" className="close" data-dismiss="modal" aria-label="Close" to="#" onClick={_closeCartModal}>
                        <i className="fe fe-x" aria-hidden="true" />
                    </Link>
                    {/* Header*/}
                    <div className="modal-header line-height-fixed font-size-lg">
                        <strong className="mx-auto">Your Cart (2)</strong>
                    </div>
                    {/* List group */}
                    <ul className="list-group list-group-lg list-group-flush">
                        <li className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    {/* Image */}
                                    <a href="./product.html">
                                        <img className="img-fluid" src="/img/products/product-6.jpg" alt="..." />
                                    </a>
                                </div>
                                <div className="col-8">
                                    {/* Title */}
                                    <p className="font-size-sm font-weight-bold mb-6">
                                        <a className="text-body" href="./product.html">Cotton floral print Dress</a> <br />
                                        <span className="text-muted">$40.00</span>
                                    </p>
                                    {/*Footer */}
                                    <div className="d-flex align-items-center">
                                        {/* Select */}
                                        <select className="custom-select custom-select-xxs w-auto">
                                            <option value={1}>1</option>
                                            <option value={1}>2</option>
                                            <option value={1}>3</option>
                                        </select>
                                        {/* Remove */}
                                        <a className="font-size-xs text-gray-400 ml-auto" href="#!">
                                            <i className="fe fe-x" /> Remove
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    {/* Image */}
                                    <a href="./product.html">
                                        <img className="img-fluid" src="/img/products/product-10.jpg" alt="..." />
                                    </a>
                                </div>
                                <div className="col-8">
                                    {/* Title */}
                                    <p className="font-size-sm font-weight-bold mb-6">
                                        <a className="text-body" href="./product.html">Suede cross body Bag</a> <br />
                                        <span className="text-muted">$49.00</span>
                                    </p>
                                    {/*Footer */}
                                    <div className="d-flex align-items-center">
                                        {/* Select */}
                                        <select className="custom-select custom-select-xxs w-auto">
                                            <option value={1}>1</option>
                                            <option value={1}>2</option>
                                            <option value={1}>3</option>
                                        </select>
                                        {/* Remove */}
                                        <a className="font-size-xs text-gray-400 ml-auto" href="#!">
                                            <i className="fe fe-x" /> Remove
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    {/* Footer */}
                    <div className="modal-footer line-height-fixed font-size-sm bg-light mt-auto">
                        <strong>Subtotal</strong> <strong className="ml-auto">$89.00</strong>
                    </div>
                    {/* Buttons */}
                    <div className="modal-body">
                        <a className="btn btn-block btn-dark" href="./checkout.html">Continue to Checkout</a>
                        <a className="btn btn-block btn-outline-dark" href="./shopping-cart.html">View Cart</a>
                    </div>
                </div>
                {/* Empty cart (remove `.d-none` to enable it) */}
                <div className="modal-content d-none">
                    {/* Close */}
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="fe fe-x" aria-hidden="true" />
                    </button>
                    {/* Header*/}
                    <div className="modal-header line-height-fixed font-size-lg">
                        <strong className="mx-auto">Your Cart (0)</strong>
                    </div>
                    {/* Body */}
                    <div className="modal-body flex-grow-0 my-auto">
                        {/* Heading */}
                        <h6 className="mb-7 text-center">Your cart is empty 😞</h6>
                        {/* Button */}
                        <a className="btn btn-block btn-outline-dark" href="#!">
                            Continue Shopping
                        </a>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}

