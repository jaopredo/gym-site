import React from 'react';

/* IMAGENS */
import Logo from '../images/logo.png';

/* COMPONENTS */
import Nav from '../components/Nav'


function Header() {
    return (
        <header>
            <img src={Logo} alt="logo" />

            <Nav />
        </header>
    );
}

export default Header;