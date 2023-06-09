import React, { useContext } from 'react';

import LogoWhite from "../../assets/LogoWhite.png"
import NavItem from "../../elements/NavItem/NavItem"
import './NavbarOnLogin.css'

const NavbarOnLogin = () => {
    const userString = sessionStorage.getItem("user");
    const user = JSON.parse(userString);

    return (
        <header id='NavbarOnLogin'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src={LogoWhite}
                            alt="Ichiraku Logo"
                            style={{ width: 180, height: 40 }}
                            className="ms-3 mt-1"
                        />
                    </a>
                    <div className="d-flex justify-content-end me-5 pt-2">
                        <p>いらっしゃいませ, {user.username} </p>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavbarOnLogin