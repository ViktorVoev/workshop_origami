import React from 'react';
import './Footer.css';
import Link from '../Navigation/Link';
import logo from '../public/blue-origami-bird-flipped.png';

function Footer() {
    return (
        <footer className="Footer">
             <ul>
               <Link to="/">Posts</Link>
               <Link to="/create-posts">New Post</Link>
               <Link to="/profile">Profile</Link>
               <Link to="/login">Login</Link>
               <Link to="/register">Register</Link>
             </ul>
             <p>Software University @ 2019</p>
        </footer>
    )
}

export default Footer
