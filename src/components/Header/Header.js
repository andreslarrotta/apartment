import React from 'react';
import './Header.scss';
import logo from '../../assets/habi-logo.png';

export const Header = () => {

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
