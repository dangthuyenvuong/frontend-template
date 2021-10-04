import { Product } from '@types'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from 'store/actions/cartAction'

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const dispatch = useDispatch()

    let { name, real_price, slug, thumbnail_url } = product

    return (
        <div className="col-6 col-md-4">
            {/* Card */}
            <div className="card mb-7">
                {/* Badge */}
                <div className="badge badge-white card-badge card-badge-left text-uppercase">
                    New
                </div>
                {/* Image */}
                <div className="card-img">
                    {/* Image */}
                    <Link className="card-img-hover" to={`/product/${slug}`}>
                        <img className="card-img-top card-img-back" src={thumbnail_url} alt="..." />
                        <img className="card-img-top card-img-front" src={thumbnail_url} alt="..." />
                    </Link>
                    {/* Actions */}
                    <div className="card-actions">
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                                <i className="fe fe-eye" />
                            </button>
                        </span>
                        <span className="card-action">
                            <button onClick={() => dispatch(addToCart(product))} className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-shopping-cart" />
                            </button>
                        </span>
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-heart" />
                            </button>
                        </span>
                    </div>
                </div>
                {/* Body */}
                <div className="card-body px-0">
                    {/* Category */}
                    <div className="font-size-xs">
                        <a className="text-muted" href="shop.html">Shoes</a>
                    </div>
                    {/* Title */}
                    <div className="font-weight-bold">
                        <Link className="text-body" to={`/product/${slug}`}>
                            {name}
                        </Link>
                    </div>
                    {/* Price */}
                    <div className="font-weight-bold text-muted">
                        {real_price?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                    </div>
                </div>
            </div>
        </div>
    )
}

