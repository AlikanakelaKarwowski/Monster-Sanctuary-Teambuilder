import React from 'react'
import {RiMenu3Line, RiCloseLin} from 'react-icons/ri'
import logo from '../../assets/MS_logo.png'
import './navbar.css'

//BEM -> Block Element Modifier
const Navbar = () => {
    return (
        <div className="ms__navbar">
            <div className="ms__navbar-links"></div>
                <div className="ms__navbar-links_logo">
                <img src={logo} alt="Logo" />
                </div>
            Navbar
        </div>
    )
}

export default Navbar
