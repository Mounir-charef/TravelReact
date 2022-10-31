import React from 'react';
import { Link } from "react-router-dom";

function Navitem(props) {
    return (
        <li className="nav-item">
            <Link onClick={props.onClick} to={'/'+ props.to} className={props.sign ? 'nav-links-mobile' : 'nav-links' }>
                {props.title}
            </Link>
        </li>
    );
}

export default Navitem;