import ErrorInput from 'components/ErrorInput'
import { useForm, useTranslate } from 'core'
import React from 'react'
import { useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { authFetchAction } from 'store/actions/authAction'


type Form = {
    username: string
    password: string
}

const Login: React.FC = () => {
    let { t } = useTranslate()

    let { register, form, handleSubmit, error } = useForm<Form>()
    const dispatch = useDispatch()
    const submit = (form: Form) => {
        dispatch(authFetchAction(form))
    }

    return (

        <div className="card card-lg mb-10 mb-md-0" style={{ maxWidth: 700, margin: '0 auto' }}>
            <div className="card-body">
                {/* Heading */}
                <h6 className="mb-7">Returning Customer</h6>
                {/* Form */}
                <form onSubmit={handleSubmit(submit)}>
                    <div className="row">
                        <div className="col-12">
                            {/* Email */}
                            <div className="form-group">
                                <label className="sr-only" htmlFor="loginEmail">
                                    Email Address *
                                </label>
                                <input className="form-control form-control-sm" id="loginEmail" type="text" placeholder="Email Address *"   {...register('username', { required: true, pattern: 'email' })} />
                                <ErrorInput error={error.username} />
                            </div>
                        </div>
                        <div className="col-12">
                            {/* Password */}
                            <div className="form-group">
                                <label className="sr-only" htmlFor="loginPassword">
                                    Password *
                                </label>
                                <input {...register('password', { min: 6, max: 32 })} className="form-control form-control-sm" id="loginPassword" type="password" placeholder="Password *" />
                                <ErrorInput error={error.password} />

                            </div>
                        </div>
                        <div className="col-12 col-md">
                            {/* Remember */}
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input className="custom-control-input" id="loginRemember" type="checkbox" />
                                    <label className="custom-control-label" htmlFor="loginRemember">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-auto">
                            {/* Link */}
                            <div className="form-group">
                                <a className="font-size-sm text-reset" data-toggle="modal" href="#modalPasswordReset">Forgot
                                    Password?</a>
                            </div>
                        </div>
                        <div className="col-12">
                            <p>{t(`Dont't have a account?`)} <Link to="/auth/register">Register</Link></p>
                        </div>
                        <div className="col-12">
                            {/* Button */}
                            <button className="btn btn-sm btn-dark" type="submit">
                                Sign In
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Login
