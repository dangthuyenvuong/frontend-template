import { Skeleton } from '@mui/material'
import { Product } from '@types'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from 'store/actions/cartAction'

export const ProductCard: React.FC<{ product?: Product }> = ({ product }) => {
    const dispatch = useDispatch()



    return (
        <div className="col-6 col-md-4">
            <div className="card mb-7">
                {/* <div className="badge badge-white card-badge card-badge-left text-uppercase">
                    New
                </div> */}
                <div className="card-img">
                    {
                        product ? (
                            <Link className="card-img-hover" to={`/product/${product?.slug}`}>
                                <img className="card-img-top card-img-back" src={product?.thumbnail_url} alt="..." />
                                <img className="card-img-top card-img-front" src={product?.thumbnail_url} alt="..." />
                            </Link>
                        ) : <Skeleton variant="rectangular" width={253} height={253} />
                    }

                    {/* Actions */}
                    {
                        product && (
                            <div className="card-actions">
                                <span className="card-action">
                                    <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                                        <i className="fe fe-eye" />
                                    </button>
                                </span>
                                <span className="card-action">
                                    {
                                        product && (
                                            <button onClick={() => dispatch(addToCart(product))} className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                                <i className="fe fe-shopping-cart" />
                                            </button>
                                        )
                                    }

                                </span>
                                <span className="card-action">
                                    <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                        <i className="fe fe-heart" />
                                    </button>
                                </span>
                            </div>
                        )
                    }
                </div>
                <div className="card-body px-0">
                    {/* Category */}
                    {/* <div className="font-size-xs">
                        <a className="text-muted" href="shop.html">Shoes</a>
                    </div> */}
                    <div className="font-weight-bold">
                        {
                            product ? (
                                <Link className="text-body" to={`/product/${product?.slug}`}>
                                    {product?.name}
                                </Link>
                            ) : <Skeleton width="100%" height={47} />

                        }
                    </div>
                    {
                        product ? (
                            <div className="font-weight-bold text-muted">
                                {product?.real_price?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                            </div>
                        ) : <Skeleton width="70%" height={24} />
                    }

                </div>
            </div>
        </div>
    )
}

