import React from 'react'

function Categories() {
    return (
        <section>
        <div className="row no-gutters d-block d-lg-flex flickity flickity-lg-none" data-flickity="{&quot;watchCSS&quot;: true}">
          {/* Item */}
          <div className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover" style={{backgroundImage: 'url(/img/covers/cover-1.jpg)'}}>
            <div className="card bg-dark-5 bg-hover text-white text-center" style={{minHeight: '470px'}}>
              <div className="card-body mt-auto mb-n11 py-8">
                {/* Heading */}
                <h1 className="mb-0 font-weight-bolder">
                  Women
                </h1>
              </div>
              <div className="card-body mt-auto py-8">
                {/* Button */}
                <a className="btn btn-white stretched-link" href="shop.html">
                  Shop Women <i className="fe fe-arrow-right ml-2" />
                </a>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover" style={{backgroundImage: 'url(/img/covers/cover-2.jpg)'}}>
            <div className="card bg-dark-5 bg-hover text-white text-center" style={{minHeight: '470px'}}>
              <div className="card-body mt-auto mb-n11 py-8">
                {/* Heading */}
                <h1 className="mb-0 font-weight-bolder">
                  Men
                </h1>
              </div>
              <div className="card-body mt-auto py-8">
                {/* Button */}
                <a className="btn btn-white stretched-link" href="shop.html">
                  Shop Men <i className="fe fe-arrow-right ml-2" />
                </a>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover" style={{backgroundImage: 'url(/img/covers/cover-3.jpg)'}}>
            <div className="card bg-dark-5 bg-hover text-white text-center" style={{minHeight: '470px'}}>
              <div className="card-body mt-auto mb-n11 py-8">
                {/* Heading */}
                <h1 className="mb-0 font-weight-bolder">
                  Kids
                </h1>
              </div>
              <div className="card-body mt-auto py-8">
                {/* Button */}
                <a className="btn btn-white stretched-link" href="shop.html">
                  Shop Kids <i className="fe fe-arrow-right ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Categories
