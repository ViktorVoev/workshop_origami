import React from 'react';
import './Aside.css';
import Link from './Link';

function Aside() {
    return (
        <aside className="Aside">
            <ul>
               <Link url="#">Aside Go along 1</Link>
               <Link url="#">Aside Go along 2</Link>
               <Link url="#">Aside Go along 3</Link>
            </ul>
        </aside>
    )
}

export default Aside
