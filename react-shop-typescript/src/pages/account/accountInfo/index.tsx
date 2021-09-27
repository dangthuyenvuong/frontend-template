import React from 'react'

const AccountInfo:React.FC = () => {
    return (
        <form>
            <div className="row">
                <div className="col-12 col-md-6">
                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="accountFirstName">
                            First Name *
                        </label>
                        <input className="form-control form-control-sm" id="accountFirstName" type="text" placeholder="First Name *" defaultValue="Daniel" required />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="accountLastName">
                            Last Name *
                        </label>
                        <input className="form-control form-control-sm" id="accountLastName" type="text" placeholder="Last Name *" defaultValue="Robinson" required />
                    </div>
                </div>
                <div className="col-12">
                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="accountEmail">
                            Email Address *
                        </label>
                        <input className="form-control form-control-sm" id="accountEmail" type="email" placeholder="Email Address *" defaultValue="user@email.com" required />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    {/* Password */}
                    <div className="form-group">
                        <label htmlFor="accountPassword">
                            Current Password *
                        </label>
                        <input className="form-control form-control-sm" id="accountPassword" type="password" placeholder="Current Password *" required />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    {/* Password */}
                    <div className="form-group">
                        <label htmlFor="AccountNewPassword">
                            New Password *
                        </label>
                        <input className="form-control form-control-sm" id="AccountNewPassword" type="password" placeholder="New Password *" required />
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    {/* Birthday */}
                    <div className="form-group">
                        {/* Label */}
                        <label>Date of Birth</label>
                        {/* Inputs */}
                        <div className="form-row">
                            <div className="col-auto">
                                {/* Date */}
                                <label className="sr-only" htmlFor="accountDate">
                                    Date
                                </label>
                                <select className="custom-select custom-select-sm" id="accountDate">
                                    <option>10</option>
                                    <option>11</option>
                                    <option selected>12</option>
                                </select>
                            </div>
                            <div className="col">
                                {/* Date */}
                                <label className="sr-only" htmlFor="accountMonth">
                                    Month
                                </label>
                                <select className="custom-select custom-select-sm" id="accountMonth">
                                    <option>January</option>
                                    <option selected>February</option>
                                    <option>March</option>
                                </select>
                            </div>
                            <div className="col-auto">
                                {/* Date */}
                                <label className="sr-only" htmlFor="accountYear">
                                    Year
                                </label>
                                <select className="custom-select custom-select-sm" id="accountYear">
                                    <option>1990</option>
                                    <option selected>1991</option>
                                    <option>1992</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    {/* Gender */}
                    <div className="form-group mb-8">
                        <label>Gender</label>
                        <div className="btn-group-toggle" data-toggle="buttons">
                            <label className="btn btn-sm btn-outline-border active">
                                <input type="radio" name="gender" defaultChecked /> Male
                            </label>
                            <label className="btn btn-sm btn-outline-border">
                                <input type="radio" name="gender" /> Female
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    {/* Button */}
                    <button className="btn btn-dark" type="submit">Save Changes</button>
                </div>
            </div>
        </form>
    )
}

export default AccountInfo
