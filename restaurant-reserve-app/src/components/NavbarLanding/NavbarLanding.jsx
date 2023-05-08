import React from 'react';

import LogoWhite from "../../assets/LogoWhite.png"
import NavItem from "../../elements/NavItem/NavItem"
import './NavbarLanding.css'

const NavbarLanding = () => {
    return (
        <header>
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
                    <div className="d-flex justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item me-4">
                                <NavItem className="nav-link" href="#" label="About Us" />
                            </li>
                            <li className="nav-item me-4">
                                <NavItem className="nav-link" href="#" label="Our Gallery" />
                            </li>
                            <li className="nav-item me-4">
                                <NavItem className="nav-link" href="/register" label="Register" />
                            </li>
                            <li className="nav-item me-2">
                                <NavItem className="nav-link" href="/" label="Login" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavbarLanding