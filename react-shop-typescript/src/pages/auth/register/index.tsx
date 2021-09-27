import ErrorInput from 'components/ErrorInput'
import { useForm, useTranslate } from 'core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


type RegisterForm = {
    firstName: string
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    newLetter: boolean
}

const Register: React.FC = () => {
    let { t } = useTranslate()


    let { register, form, handleSubmit, error } = useForm<RegisterForm>()
    const dispatch = useDispatch()
    const submit = (form: RegisterForm) => {
        // dispatch(authFetchAction(form))
        console.log(form)
    }

    return (
        <div className="card card-lg" style={{ maxWidth: 700, margin: '0 auto' }}>
            <div className="card-body">
                {/* Heading */}
                <h6 className="mb-7">New Customer</h6>
                {/* Form */}
                <form onSubmit={handleSubmit(submit)}>
                    <div className="row">
                        <div className="col-12">
                            {/* Email */}
                            <div className="form-group">
                                <label className="sr-only" htmlFor="registerFirstName">
                                    First Name *
                                </label>
                                <input className="form-control form-control-sm" id="registerFirstName" type="text" placeholder="First Name *" {...register('firstName', { required: true })} />
                                <ErrorInput error={error.firstName} />
                            </div>
                        </div>
                        <div className="col-12">
                            {/* Email */}
                            <div className="form-group">
                                <label className="sr-only" htmlFor="registerLastName">
                                    Last Name *
                                </label>
                                <input className="form-control form-control-sm" id="registerLastName" type="text" placeholder="Last Name *" {...register('lastName', { required: true })} />
                                <ErrorInput error={error.lastName} />

                            </div>
                        </div>
                        <div className="col-12">
                            {/* Email */}
                            <div className="form-group">
                                <label className="sr-only" htmlFor="registerEmail">
                                    Email Address *
                                </label>
                                <input className="form-control form-control-sm" id="registerEmail" type="text" placeholder="Email Address *" {...register('email', { required: true, pattern: 'email' })} />
                                <ErrorInput error={error.email} />

                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            {/* Password */}
                            <div className="form-group">
                                <label className="sr-only" htmlFor="registerPassword">
                                    Password *
                                </label>
                                <input className="form-control form-control-sm" id="registerPassword" type="password" placeholder="Password *" {...register('password', { required: true, min: 6, max: 32 })} />
                                <ErrorInput error={error.password} />

                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            {/* Password */}
                            <div className="form-group">
                                <label className="sr-only" htmlFor="registerPasswordConfirm">
                                    Confirm Password *
                                </label>
                                <input className="form-control form-control-sm" id="registerPasswordConfirm" type="password" placeholder="Confrm Password *" {...register('confirmPassword', { confirm: 'password' })} />
                                <ErrorInput error={error.confirmPassword} />
                            </div>
                        </div>
                        <div className="col-12 col-md-auto">
                            {/* Link */}
                            <div className="form-group font-size-sm text-muted">
                                By registering your details, you agree with our Terms &amp; Conditions,
                                and Privacy and Cookie Policy.
                            </div>
                        </div>
                        <div className="col-12 col-md">
                            {/* Newsletter */}
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input className="custom-control-input" id="registerNewsletter" type="checkbox" {...register('newLetter')} />
                                    <label className="custom-control-label" htmlFor="registerNewsletter">
                                        Sign me up for the Newsletter!
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <p>{t(`Have a account?`)} <Link to="/auth/login">Login</Link></p>
                        </div>
                        <div className="col-12">
                            {/* Button */}
                            <button className="btn btn-sm btn-dark" type="submit">
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
