import { Product } from '@types'
import React, { useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { RootState } from 'store'
import { cartDecrement, cartIncrement, cartRemove, toggleCart } from 'store/actions/cartAction'
import { getSubtotal, useCartNumber } from 'store/selector'
import { currency } from 'utils'




export const ModalShoppingCart: React.FC = () => {
    let { openCart, list } = useSelector((store: RootState) => store.cart)

    let num = useCartNumber()
    const dispatch = useDispatch()
    const history = useHistory()
    const subtotal = useSelector(getSubtotal)

    useEffect(() => {
        if (openCart) {
            document.body.classList.add('modal-open')
        } else {
            document.body.classList.remove('modal-open')
        }
    }, [openCart])

    const _preventViewCart = useCallback((ev: React.MouseEvent) => {
        if (list.length === 0) {
            ev.preventDefault();
            history.push('/product')
        }
        dispatch(toggleCart(false))
    }, [list])
    return ReactDOM.createPortal(
        <div onClick={(ev) => { dispatch(toggleCart(false)) }} className={`modal fixed-right fade ${openCart ? 'show' : ''}`} style={{ display: openCart ? 'block' : 'none' }} id="modalShoppingCart" tabIndex={-1} role="dialog" aria-hidden="true">
            <div style={{ transition: 'transform .3s ease-out' }} onClick={ev => ev.stopPropagation()} className="modal-dialog modal-dialog-vertical" role="document">
                {/* Full cart (add `.d-none` to disable it) */}
                <div className="modal-content">
                    {/* Close */}
                    <button type="button" onClick={() => dispatch(toggleCart(false))} className="close" data-dismiss="modal" aria-label="Close">
                        <i className="fe fe-x" aria-hidden="true" />
                    </button>
                    {/* Header*/}
                    <div className="modal-header line-height-fixed font-size-lg">
                        <strong className="mx-auto">Your Cart ({num})</strong>
                    </div>
                    {/* List group */}
                    <ul className="list-group list-group-lg list-group-flush">
                        {
                            list.map(e => <CartItem key={e.product.id} {...e} />)
                        }
                    </ul>
                    {/* Footer */}
                    <div className="modal-footer line-height-fixed font-size-sm bg-light mt-auto">
                        <strong>Subtotal</strong> <strong className="ml-auto">{currency(subtotal)}</strong>
                    </div>
                    {/* Buttons */}
                    <div className="modal-body">
                        <a className="btn btn-block btn-dark" href="./checkout.html">Continue to Checkout</a>
                        <Link className="btn btn-block btn-outline-dark" onClick={_preventViewCart} to="/view-cart">View Cart</Link>
                    </div>
                </div>
                {/* Empty cart (remove `.d-none` to enable it) */}
                <div className="modal-content d-none">
                    {/* Close */}
                    <button type="button" className="close">
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
            {
                openCart && <BackDrop onClick={() => dispatch(toggleCart(false))} />
            }
        </div >
        , document.body)
}

const CartItem: React.FC<{
    product: Product,
    num: number
}> = ({ num, product }) => {

    const dispatch = useDispatch()
    const _changeNumber = (ev: React.ChangeEvent<HTMLInputElement>) => {

        if (num > parseInt(ev.currentTarget.value)) {
            dispatch(cartDecrement(product.id))
        } else {
            dispatch(cartIncrement(product.id))
        }

    }

    let { name, real_price, slug, thumbnail_url } = product
    return (
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-4">
                    {/* Image */}
                    <Link className="card-img-hover" to={`/product/${slug}`}>
                        <img className="img-fluid" src={thumbnail_url} alt="..." />
                    </Link>
                </div>
                <div className="col-8">
                    {/* Title */}
                    <p className="font-size-sm font-weight-bold mb-6">
                        <a className="text-body" href="./product.html">{name}</a> <br />
                        <span className="text-muted">
                            {real_price?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                        </span>
                    </p>
                    {/*Footer */}
                    <div className="d-flex align-items-center">
                        {/* Select */}
                        <input autoComplete="false" onChange={_changeNumber} type="number" className="cart-input-num" value={num} />
                        {/* Remove */}
                        <a onClick={(ev) => { ev.preventDefault(); dispatch(cartRemove(product.id)) }} className="font-size-xs text-gray-400 ml-auto" href="#!">
                            <i className="fe fe-x" /> Remove
                        </a>
                    </div>
                </div>
            </div>
        </li>
    )
}

const BackDrop: React.FC<{
    onClick?: (ev: React.MouseEvent) => void
}> = ({ onClick }) => {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.modal-backdrop')?.classList.add('show')
        })
        return () => {
            document.querySelector('.modal-backdrop')?.classList.remove('show')
        }
    }, [])

    return ReactDOM.createPortal(<div onClick={onClick} className="modal-backdrop fade "></div>, document.body)
}