import React from 'react';
import './Post.css';

function Post({ imgUrl, imgAlt, children, authorName }) {
    return (
        <div className="Post">
            <img src={imgUrl} alt={imgAlt}/>
            <p className="description"> 
                {children}
            </p>
            <div>
                <span>
                    <small>Author:</small>
                    {authorName}
                </span>
            </div>
        </div>
    )
}

export default Post