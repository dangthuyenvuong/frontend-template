import React from 'react'

const HomeCard: React.FC = () => {
    return (
        <div className="card card-lg">
            <div className="card-body">
                <ul className="list-styled font-size-sm">
                    <li className="list-styled-item">
                        <a className="list-styled-link" href="./index.html">Default</a>
                    </li>
                    <li className="list-styled-item">
                        <a className="list-styled-link" href="./index-classic.html">Classic</a>
                    </li>
                    <li className="list-styled-item">
                        <a className="list-styled-link" href="./index-fashion.html">Fashion</a>
                    </li>
                    <li className="list-styled-item">
                        <a className="list-styled-link" href="./index-boxed.html">Boxed</a>
                    </li>
                    <li className="list-styled-item">
                        <a className="list-styled-link" href="./index-simple.html">Simple</a>
                    </li>
                    <li className="list-styled-item">
                        <a className="list-styled-link" href="./index-asymmetric.html">Asymmetric</a>
                    </li>
                    <li className="list-styled-item">
                        <a className="list-styled-link" href="./index-sidenav.html">Sidenav</a>
                    </li>
                    <li className="list-styled-item">
                        <a className="list-styled-link" href="./index-landing.html">Landing</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HomeCard
