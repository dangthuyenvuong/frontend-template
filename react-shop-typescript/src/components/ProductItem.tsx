import { Product } from "@types"
import { useDispatch } from "react-redux"
import { cartDecrement, cartIncrement, cartRemove } from "store/actions/cartAction"
import { currency } from "utils"

export const ProductItem: React.FC<{ product: Product, num?: number }> = ({ product, num }) => {

    const dispatch = useDispatch()

    const _changeNumber = (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (!num) return
        if (num > parseInt(ev.currentTarget.value)) {
            dispatch(cartDecrement(product.id))
        } else {
            dispatch(cartIncrement(product.id))
        }

    }

    return (
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-3">
                    {/* Image */}
                    <a href="product.html">
                        <img src={product.thumbnail_url} alt="..." className="img-fluid" />
                    </a>
                </div>
                <div className="col">
                    {/* Title */}
                    <div className="d-flex mb-2 font-weight-bold">
                        <a className="text-body" href="product.html">{product.name}</a> <span className="ml-auto">{currency(product.real_price)}</span>
                    </div>
                    {/* Text */}
                    {/* <p className="mb-7 font-size-sm text-muted">
                        Size: M <br />
                        Color: Red
                    </p> */}
                    {/*Footer */}
                    {
                        num && (
                            <div className="d-flex align-items-center">
                                {/* Select */}
                                <input autoComplete="false" onChange={_changeNumber} type="number" className="cart-input-num" value={num} />
                                {/* Remove */}
                                <a onClick={(ev) => { ev.preventDefault(); dispatch(cartRemove(product.id)) }} className="font-size-xs text-gray-400 ml-auto" href="#!">
                                    <i className="fe fe-x" /> Remove
                                </a>
                            </div>
                        )
                    }

                </div>
            </div>
        </li >
    )
}