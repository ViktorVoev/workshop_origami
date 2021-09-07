import React from 'react';
import './Link.css';
import { Link as ReactRoutreDomLink } from 'react-router-dom';


function Link({ children, to }) {
    return (
        <li className="listItem">
            <ReactRoutreDomLink to={to}>{children}</ReactRoutreDomLink>
        </li>
    )
}

export default Link
