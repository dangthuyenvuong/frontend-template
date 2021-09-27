import React from 'react'

const CatalogCard: React.FC = () => {

    function handleTab(event: any) {
        event.preventDefault()
        event.preventDefault()
        document.querySelectorAll('.nav-tabs .nav-link, .card .card-body .tab-pane').forEach(e => {
            e.classList.remove('active')
        })
        document.querySelectorAll('.card .card-body .tab-pane').forEach(e => {
            e.classList.remove('active')
        })
        event.currentTarget.classList.add('active')
        let id = event.currentTarget.getAttribute('href')
        console.log(id)
        document.querySelector(`.card .card-body #${id}`)?.classList.add('active','show')
    }


    return (
        <div>

            {/* Tabs */}
            <form className="mb-2 mb-lg-0 border-bottom-lg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Nav */}
                            <nav className="nav nav-tabs nav-overflow font-size-xs border-bottom border-bottom-lg-0" >
                                <a className="nav-link text-uppercase active" data-toggle="tab" href="navTab1" onClick={handleTab}>
                                    Women
                                </a>
                                <a className="nav-link text-uppercase" data-toggle="tab" href="navTab2" onClick={handleTab}>
                                    Men
                                </a>
                                <a className="nav-link text-uppercase" data-toggle="tab" href="navTab3" onClick={handleTab}>
                                    Kids
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </form>
            {/* Tab content */}
            <div className="card card-lg">
                <div className="card-body">
                    <div className="tab-content">
                        {/* Tab pane 1 */}
                        <div className="tab-pane fade show active" id="navTab1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6 col-md">
                                        {/* Heading */}
                                        <div className="mb-5 font-weight-bold">Clothing1</div>
                                        {/* Links */}
                                        <ul className="list-styled mb-6 mb-md-0 font-size-sm">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">All Clothing</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Blouses &amp; Shirts</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Coats &amp; Jackets</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Dresses</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Hoodies &amp; Sweats</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Denim</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Jeans</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Jumpers &amp; Cardigans</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Leggings</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-md">
                                        {/* Heading */}
                                        <div className="mb-5 font-weight-bold">Shoes &amp; Boots</div>
                                        {/* Links */}
                                        <ul className="list-styled mb-6 mb-md-0 font-size-sm">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">All Shoes &amp; Boots</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Branded Shoes</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Boots</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Heels</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Trainers</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Sandals</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Shoes</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Wide Fit Shoes</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-md">
                                        {/* Heading */}
                                        <div className="mb-5 font-weight-bold">Bags &amp; Accessories</div>
                                        {/* Links */}
                                        <ul className="list-styled mb-0 font-size-sm">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">All Bags &amp; Accessories</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Accessories</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Bags &amp; Purses</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Luggage</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Belts</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Hats</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Hair Accessories</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Jewellery</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Travel Accessories</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-md">
                                        {/* Heading */}
                                        <div className="mb-5 font-weight-bold">Collections</div>
                                        {/* Links */}
                                        <ul className="list-styled mb-0 font-size-sm">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">All Collections</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Occasionwear</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Going Out</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Workwear</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Holiday Shop</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Jean Fit Guide</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-4 d-none d-lg-block">
                                        {/* Card */}
                                        <div className="card">
                                            {/* Image */}
                                            <img className="card-img" src="/img/products/product-110.jpg" alt="..." />
                                            {/* Overlay */}
                                            <div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
                                                <div className="text-center">
                                                    <a className="btn btn-white stretched-link" href="./shop.html">
                                                        Shop Sweaters <i className="fe fe-arrow-right ml-2" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ========== */}

                        {/* Tab pane 2 */}
                        <div className="tab-pane fade show " id="navTab2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6 col-md">
                                        {/* Heading */}
                                        <div className="mb-5 font-weight-bold">Clothing2</div>
                                        {/* Links */}
                                        <ul className="list-styled mb-6 mb-md-0 font-size-sm">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">All Clothing</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Blouses &amp; Shirts</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Coats &amp; Jackets</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Dresses</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Hoodies &amp; Sweats</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Denim</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Jeans</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Jumpers &amp; Cardigans</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Leggings</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-md">
                                        {/* Heading */}
                                        <div className="mb-5 font-weight-bold">Shoes &amp; Boots</div>
                                        {/* Links */}
                                        <ul className="list-styled mb-6 mb-md-0 font-size-sm">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">All Shoes &amp; Boots</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Branded Shoes</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Boots</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Heels</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Trainers</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Sandals</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Shoes</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Wide Fit Shoes</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-md">
                                        {/* Heading */}
                                        <div className="mb-5 font-weight-bold">Bags &amp; Accessories</div>
                                        {/* Links */}
                                        <ul className="list-styled mb-0 font-size-sm">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">All Bags &amp; Accessories</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Accessories</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Bags &amp; Purses</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Luggage</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Belts</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Hats</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Hair Accessories</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Jewellery</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Travel Accessories</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-md">
                                        {/* Heading */}
                                        <div className="mb-5 font-weight-bold">Collections</div>
                                        {/* Links */}
                                        <ul className="list-styled mb-0 font-size-sm">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">All Collections</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Occasionwear</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Going Out</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Workwear</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Holiday Shop</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Jean Fit Guide</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-4 d-none d-lg-block">
                                        {/* Card */}
                                        <div className="card">
                                            {/* Image */}
                                            <img className="card-img" src="/img/products/product-110.jpg" alt="..." />
                                            {/* Overlay */}
                                            <div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
                                                <div className="text-center">
                                                    <a className="btn btn-white stretched-link" href="./shop.html">
                                                        Shop Sweaters <i className="fe fe-arrow-right ml-2" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ========== */}

                        {/* Tab pane 3 */}
                        <div className="tab-pane fade show " id="navTab3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6 col-md">
                                        {/* Heading */}
                                        <div className="mb-5 font-weight-bold">Clothing3</div>
                                        {/* Links */}
                                        <ul className="list-styled mb-6 mb-md-0 font-size-sm">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">All Clothing</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Blouses &amp; Shirts</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Coats &amp; Jackets</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Dresses</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Hoodies &amp; Sweats</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Denim</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Jeans</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Jumpers &amp; Cardigans</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Leggings</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-md">
                                        {/* Heading */}
                                        <div className="mb-5 font-weight-bold">Shoes &amp; Boots</div>
                                        {/* Links */}
                                        <ul className="list-styled mb-6 mb-md-0 font-size-sm">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">All Shoes &amp; Boots</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Branded Shoes</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Boots</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Heels</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Trainers</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Sandals</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Shoes</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Wide Fit Shoes</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-md">
                                        {/* Heading */}
                                        <div className="mb-5 font-weight-bold">Bags &amp; Accessories</div>
                                        {/* Links */}
                                        <ul className="list-styled mb-0 font-size-sm">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">All Bags &amp; Accessories</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Accessories</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Bags &amp; Purses</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Luggage</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Belts</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Hats</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Hair Accessories</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Jewellery</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Travel Accessories</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-md">
                                        {/* Heading */}
                                        <div className="mb-5 font-weight-bold">Collections</div>
                                        {/* Links */}
                                        <ul className="list-styled mb-0 font-size-sm">
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">All Collections</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Occasionwear</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Going Out</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Workwear</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Holiday Shop</a>
                                            </li>
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" href="./shop.html">Jean Fit Guide</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-4 d-none d-lg-block">
                                        {/* Card */}
                                        <div className="card">
                                            {/* Image */}
                                            <img className="card-img" src="/img/products/product-110.jpg" alt="..." />
                                            {/* Overlay */}
                                            <div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
                                                <div className="text-center">
                                                    <a className="btn btn-white stretched-link" href="./shop.html">
                                                        Shop Sweaters <i className="fe fe-arrow-right ml-2" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ========== */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogCard
