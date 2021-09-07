import React from 'react';
import './Profile.css';
import logo from '../public/blue-origami-bird.png';
import Posts from '../Posts/Posts';

export default function Profile() {
    return <div className="Profile">
        <img src={logo} alt="profile-icon" />
        <div className="personal-info">
            <p>
                <span>Email:</span>
                voev92@gmail.com
            </p>
            <p>
            <span>Posts:</span>
            9
            </p>   
            <div>
                <h2>3 of your recent posts</h2>
            </div>
        </div>
        <Posts />
    </div>
}