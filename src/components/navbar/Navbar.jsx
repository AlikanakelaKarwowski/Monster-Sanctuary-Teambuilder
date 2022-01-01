import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/MS_logo.png'
import './navbar.css'

const Menu = () => (
    <>
        <p><a href="#team">Team</a></p>
        <p><a href="#monsters">Monsters</a></p>
    </>
)

//BEM -> Block Element Modifier
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);



    return (
        <div className="ms__navbar">
            <div className="ms__navbar-links">
                <div className="ms__navbar-links_logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="ms__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="ms__navbar-sign">
                <p>Login</p>
                <button type="button">Sign Up</button>
            </div>
            <div className="ms__navbar-menu">
                {toggleMenu ? (
                    <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                ) : (
                    <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                )}
                {toggleMenu && (
                    <div className="ms__navbar-menu_container scale-up-center">
                        <div className="ms__navbar-menu_container-links">
                            <Menu />
                            <div className="ms__navbar-menu_container-links-sign">
                                <p>Login</p>
                                <button type="button">Sign Up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar
