import React from 'react';
import './style/Navbar.scss';
import logo from '../../assets/shared/desktop/logo-dark.png';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md">
            <img className="navbar-brand" src={logo} alt=""/>
            <ul class="navbar-nav collapse">
                <li class="nav-item">
                    <a class="nav-link" href="#">OUR COMPANY</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">LOCATIONS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">CONTACT</a>
                </li>
            </ul>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">OUR COMPANY</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">LOCATIONS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;