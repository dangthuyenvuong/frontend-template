import React from 'react'

const Pages: React.FC = () => {
    return (
        <div className="card card-lg">
            <div className="card-body">
                <ul className="list-styled font-size-sm">
                    <li className="list-styled-item">
                        <a className="list-styled-link" href="./about.html">About</a>
                    </li>
                    <li className="list-styled-item">
                        <a className="list-styled-link" href="./contact-us.html">Contact Us</a>
                    </li>
                    <li className="list-styled-item">
                        <a className="list-styled-link" href="./store-locator.html">Store Locator</a>
                    </li>
                    <li className="list-styled-item">
                        <a className="list-styled-link" href="./faq.html">FAQ</a>
                    </li>
                    <li className="list-styled-item">
                        <a className="list-styled-link" href="./coming-soon.html">Coming Soon</a>
                    </li>
                    <li className="list-styled-item">
                        <a className="list-styled-link" href="./404.html">404</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Pages
