import React from 'react';

/* CSS */
import './../sass/Header.scss'

/* IMAGENS */
import Logo from '../images/logo.png';

/* COMPONENTS */
import Nav from '../components/Nav'


function Header() {
    return (
        <header id='cabecalho'>
            <img className="logo" src={Logo} alt="logo" />
            <Nav />
        </header>
    );
}

export default Header;