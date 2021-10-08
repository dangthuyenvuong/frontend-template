import { ProductItem } from "components"
import { useForm } from "core"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Redirect } from "react-router"
import { getSubtotal, getTaxPrice, useCart, useCartNumber, useTotal } from "store/selector"
import { currency } from "utils"
import { TextField } from "./components"

type Form = {
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    phone: string,
    address2: string,
    phone2: string
}

const Checkout: React.FC = () => {

    const { list } = useCart()
    const total = useTotal()
    const taxPrice = useSelector(getTaxPrice)
    const subTotal = useSelector(getSubtotal)
    const cartNumber = useCartNumber()
    const [shippingPrice, setShippingPrice] = useState(35000)
    const [isDifferentAddress, setIsDifferentAddress] = useState(false)


    const { error, form, handleSubmit, register } = useForm<Form>()

    const formSubmit = (form: Form) => {
        console.log('thanh cong')
    }

    const changeShipping = (ev: React.ChangeEvent<HTMLInputElement>) => {
        let value = ev.currentTarget.value
        setShippingPrice(parseInt(value))
    }


    if (list.length === 0) return <Redirect to="/product" />

    return (
        <section className="pt-7 pb-12">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        {/* Heading */}
                        <h3 className="mb-4">Checkout</h3>
                        {/* Subheading */}
                        <p className="mb-10">
                            Already have an account? <a className="font-weight-bold text-reset" href="#!">Click here to login</a>
                        </p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(formSubmit)}>
                    <div className="row">

                        <div className="col-12 col-md-7">
                            {/* Form */}

                            {/* Heading */}
                            <h6 className="mb-7">Billing Details</h6>
                            {/* Billing details */}
                            <div className="row mb-9">
                                <TextField className="col-md-6" {...register('firstName', { required: true })} error={error.firstName} required label="First Name" placeholder="First Name" />
                                <TextField className="col-md-6" {...register('lastName', { required: true })} error={error.lastName} required label="Last Name" placeholder="Last Name" />
                                <TextField {...register('email', { required: true })} error={error.email} required label="Email" placeholder="Email" />
                                <TextField {...register('address', { required: true })} error={error.address} required label="Address" placeholder="Address" />
                                <TextField {...register('phone', { required: true })} error={error.phone} required label="Phone" placeholder="Phone" />
                            </div>
                            <h6 className="mb-7">Shipping Details</h6>
                            <div className="table-responsive mb-6">
                                <table className="table table-bordered table-sm table-hover mb-0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-radio">
                                                    <input onChange={changeShipping} className="custom-control-input" checked={shippingPrice === 35000} id="checkoutShippingStandard" value={35000} name="shipping" type="radio" />
                                                    <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingStandard">
                                                        Standard Shipping
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Delivery in 5 - 7 working days</td>
                                            <td>{currency(35000)}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-radio">
                                                    <input onChange={changeShipping} className="custom-control-input" checked={shippingPrice === 40000} id="checkoutShippingExpress" value={40000} name="shipping" type="radio" />
                                                    <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingExpress">
                                                        Express Shipping
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Delivery in 3 - 5 working days</td>
                                            <td>{currency(40000)}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-radio">
                                                    <input onChange={changeShipping} className="custom-control-input" checked={shippingPrice === 50000} id="checkoutShippingShort" value={50000} name="shipping" type="radio" />
                                                    <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingShort">
                                                        1 - 2 Shipping
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Delivery in 1 - 2 working days</td>
                                            <td>{currency(50000)}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-radio">
                                                    <input onChange={changeShipping} className="custom-control-input" checked={shippingPrice === 0} id="checkoutShippingFree" value={0} name="shipping" type="radio" />
                                                    <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingFree">
                                                        Free Shipping
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Living won't the He one every subdue
                                                meat replenish face was you morning
                                                firmament darkness.</td>
                                            <td>{currency(0)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mb-9">
                                <div className="custom-control custom-checkbox">
                                    <input onChange={(ev) => setIsDifferentAddress(ev.currentTarget.checked)} checked={isDifferentAddress} className="custom-control-input" id="checkoutShippingAddress" type="checkbox" />
                                    <label className="custom-control-label font-size-sm" data-toggle="collapse" data-target="#checkoutShippingAddressCollapse" htmlFor="checkoutShippingAddress">
                                        Ship to a different address?
                                    </label>
                                </div>
                                <div className={`collapse ${isDifferentAddress ? 'show' : ''}`} id="checkoutShippingAddressCollapse">
                                    <div className="row mt-6">
                                        <TextField {...register('address2', { required: true, check: isDifferentAddress })} error={error.address2} required label="Addresss" placeholder="Addresss" />
                                        <TextField {...register('phone2', { required: true, check: isDifferentAddress })} error={error.phone2} required label="Phone" placeholder="Phone" />

                                        <div className="col-12">
                                            <button className="btn btn-sm btn-outline-dark" type="submit">
                                                Save Address
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<h6 className="mb-7">Payment</h6>
                            <div className="list-group list-group-sm mb-7">
                                <div className="list-group-item">
                                    <div className="custom-control custom-radio">
                                        <input className="custom-control-input" id="checkoutPaymentCard" name="payment" type="radio" data-toggle="collapse" data-action="show" data-target="#checkoutPaymentCardCollapse" />
                                        <label className="custom-control-label font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentCard">
                                            Credit Card <img className="ml-2" src="/img/brands/color/cards.svg" alt="..." />
                                        </label>
                                    </div>
                                </div>
                                <div className="list-group-item collapse py-0" id="checkoutPaymentCardCollapse">
                                    <div className="form-row py-5">
                                        <div className="col-12">
                                            <div className="form-group mb-4">
                                                <label className="sr-only" htmlFor="checkoutPaymentCardNumber">Card Number</label>
                                                <input className="form-control form-control-sm" id="checkoutPaymentCardNumber" type="text" placeholder="Card Number *" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group mb-4">
                                                <label className="sr-only" htmlFor="checkoutPaymentCardName">Name on Card</label>
                                                <input className="form-control form-control-sm" id="checkoutPaymentCardName" type="text" placeholder="Name on Card *" required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="form-group mb-md-0">
                                                <label className="sr-only" htmlFor="checkoutPaymentMonth">Month</label>
                                                <select className="custom-select custom-select-sm" id="checkoutPaymentMonth">
                                                    <option>January</option>
                                                    <option>February</option>
                                                    <option>March</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="form-group mb-md-0">
                                                <label className="sr-only" htmlFor="checkoutPaymentCardYear">Year</label>
                                                <select className="custom-select custom-select-sm" id="checkoutPaymentCardYear">
                                                    <option>2017</option>
                                                    <option>2018</option>
                                                    <option>2019</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="input-group input-group-merge">
                                                <input className="form-control form-control-sm" id="checkoutPaymentCardCVV" type="text" placeholder="CVV *" required />
                                                <div className="input-group-append">
                                                    <span className="input-group-text" data-toggle="popover" data-placement="top" data-trigger="hover" data-content="The CVV Number on your credit card or debit card is a 3 digit number on VISA, MasterCard and Discover branded credit and debit cards.">
                                                        <i className="fe fe-help-circle" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group-item">
                                    <div className="custom-control custom-radio">
                                        <input className="custom-control-input" id="checkoutPaymentPaypal" name="payment" type="radio" data-toggle="collapse" data-action="hide" data-target="#checkoutPaymentCardCollapse" />
                                        <label className="custom-control-label font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentPaypal">
                                            <img src="/img/brands/color/paypal.svg" alt="..." />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <textarea className="form-control form-control-sm mb-9 mb-md-0 font-size-xs" rows={5} placeholder="Order Notes (optional)" defaultValue={""} /> */}
                        </div>
                        <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
                            {/* Heading */}
                            <h6 className="mb-7">Order Items ({cartNumber})</h6>
                            {/* Divider */}
                            <hr className="my-7" />
                            {/* List group */}
                            <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x mb-7">
                                {
                                    list.map(e => <ProductItem key={e.product.id} product={e.product} />)
                                }
                            </ul>
                            {/* Card */}
                            <div className="card mb-9 bg-light">
                                <div className="card-body">
                                    <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                                        <li className="list-group-item d-flex">
                                            <span>Subtotal</span> <span className="ml-auto font-size-sm">{currency(subTotal)}</span>
                                        </li>
                                        <li className="list-group-item d-flex">
                                            <span>Tax</span> <span className="ml-auto font-size-sm">{currency(taxPrice)}</span>
                                        </li>
                                        <li className="list-group-item d-flex">
                                            <span>Shipping</span> <span className="ml-auto font-size-sm">{currency(shippingPrice)}</span>
                                        </li>
                                        <li className="list-group-item d-flex font-size-lg font-weight-bold">
                                            <span>Total</span> <span className="ml-auto">{currency(total + shippingPrice)}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Disclaimer */}
                            <p className="mb-7 font-size-xs text-gray-500">
                                Your personal data will be used to process your order, support
                                your experience throughout this website, and for other purposes
                                described in our privacy policy.
                            </p>
                            {/* Button */}
                            <button type="submit" className="btn btn-block btn-dark">
                                Place Order
                            </button>
                        </div>
                    </div>
                </form>
            </div >
        </section >
    )
}

export default Checkout