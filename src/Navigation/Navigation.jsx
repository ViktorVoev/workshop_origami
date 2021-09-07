import React from 'react';
import './Navigation.css';
import Link from './Link';
import logo from '../public/white-origami-bird.png'

function Navigation() {
    return (
        <nav className="Navigation">
            <ul>
               <Link to="/"><img id='logo' src={logo} /></Link>
               <Link to="/">Posts</Link>
               <Link to="/create-posts">New Post</Link>
               <Link to="/profile">Profile</Link>
               <Link to="/login">Login</Link>
               <Link to="/register">Register</Link>
            </ul>
        </nav>
    )
}

export default Navigation
