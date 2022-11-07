import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Navitem from "./Navitem";
import {Button} from "./Button";
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }
    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
    }, []);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link className="navbar-logo" to='/'>
                        Lolifmaster &nbsp; <i className="fa-solid fa-code"></i>
                    </Link>
                    <div className="menu-icon" onClick={()=> {setClick(!click)}}>
                        <i className={click ? 'fas fa-times' : "fas fa-bars"}></i>
                    </div>
                    <ul className={click? 'nav-menu active' : 'nav-menu'}>
                        <Navitem title={"Home"} to={''} sign={false} onClick={closeMobileMenu}/>
                        <Navitem title={"Services"} to={"Services"} sign={false} onClick={closeMobileMenu}/>
                        <Navitem title={"Products"} to={"Products"} sign={false} onClick={closeMobileMenu}/>
                        <Navitem title="Contact us" to={"contact"} sign={false} onClick={closeMobileMenu} />
                        <Navitem title={"Sign up"} to={"Sign-up"} sign={true} onClick={closeMobileMenu}/>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;