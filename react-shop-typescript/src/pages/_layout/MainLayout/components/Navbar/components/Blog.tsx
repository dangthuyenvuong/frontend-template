import React from 'react'

const Blog: React.FC = () => {
    return (
        <div className="card card-lg">
            <div className="card-body">
                <ul className="list-styled font-size-sm">
                    <li className="list-styled-item">
                        <a className="list-styled-link" href="./blog.html">Blog</a>
                    </li>
                    <li className="list-styled-item">
                        <a className="list-styled-link" href="./blog-post.html">Blog Post</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Blog
