import React from 'react';
import './styles.scss';
import logo from '../assets/habi-logo.png';

const Header = () => {

    return (
        <header>
            <div className="header">
                <div className="header_container">
                    <a href="/">
                        <img src={logo} alt="Habi" />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
