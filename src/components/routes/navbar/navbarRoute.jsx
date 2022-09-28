import React, { useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import { RiCloseLine }  from 'react-icons/ri';

import logo from '../../assets/bawor/LOGO PT VERSI 2 WEB.png';
import Button from '../../Button/button.js';

import './navRoute.css';

const NavbarRoute = () => {
    const [ showMenu, setShowMenu ] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return(
    <>
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" className='icons' />
            </div>
            <menu>
                <ul className="nav-links" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/event">Event</a></li>
                    <li><a href="/news">News</a></li>
                    <li><a href="/our-product">Product</a></li>
                    <li><a href="/#our-teams">Teams</a></li>
                    <li><a href="/#support">Support</a></li>
                    <li><a href="/#social-media">Social Media</a></li>
                    <li><a href="/#contact">Contact</a></li>
                    <li className="nav-btn">
                        <Button text={"Questions"} btnClass={"btn-dark"} href={"#faq"} />
                    </li>
                </ul>
            </menu>
            <div className="menu-icons" onClick={toggleMenu}>
                {showMenu ? (<RiCloseLine color='#fff' size={30} />) : (<AiOutlineBars color='#fff' size={27} />)}
            </div>
        </nav>
    </>
    )
}

export default NavbarRoute