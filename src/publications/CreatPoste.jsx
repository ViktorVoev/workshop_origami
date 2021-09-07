import React from 'react';
import './CreatePost.css';
import Posts from '../Posts/Posts';
export default function CreatePost() {
    return <div className="Input">
        <div>
            <textarea></textarea>
            <button>Post</button>
        </div>
        <div>
            <h2>Last 3 post on your wall</h2>
        </div>
        <Posts />
    </div>
}