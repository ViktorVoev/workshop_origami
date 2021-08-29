import React from 'react';
import './Footer.css';
import Link from '../Navigation/Link';
import logo from '../public/blue-origami-bird-flipped.png';

function Footer() {
    return (
        <footer className="Footer">
            <ul>
                <Link>Go along 1</Link>
                <Link>Go along 2</Link>
                <Link>Go along 3</Link>
                <Link>Go along 4</Link>
                <Link>Go along 5</Link>
                <Link>Go along 6</Link>
                <Link>Go along 7</Link>
                <Link>Go along 8</Link>
                <Link><img id='footerLogo' src={logo} /></Link>
            </ul>
            <p>Software University @ 2019</p>
        </footer>
    )
}

export default Footer
