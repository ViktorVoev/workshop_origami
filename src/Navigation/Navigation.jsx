import React from 'react';
import './Navigation.css';
import Link from './Link';
import logo from '../public/white-origami-bird.png'

function Navigation() {
    return (
        <nav className="Navigation">
            <ul>
               <Link><img id='logo' src={logo} /></Link>
               <Link>Go along 1</Link>
               <Link>Go along 2</Link>
               <Link>Go along 3</Link>
            </ul>
        </nav>
    )
}

export default Navigation
