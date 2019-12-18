import React from 'react'
import ecfLogo from '../assets/img/logo-ecf.png'
import cwLogo from '../assets/img/logo-cw.png'
import climactLogo from '../assets/img/logo-climact.png'
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav className="nav">
                <a href="https://europeanclimate.org/" target="_blank" rel="noopener noreferrer" className="nav__link">
                    <img src={ecfLogo} alt="Logo European Climate Foundation"/>
                </a>
                <a href="https://www.climateworks.org/" target="_blank" rel="noopener noreferrer" className="nav__link">
                    <img src={cwLogo} alt="Logo Climate Works Foundation"/>
                </a>
                <a href="/" className="nav__link nav__link--title">
                    <h1>Net <span>Zero</span> 2050</h1>
                </a>
                <a href="http://www.climact.com/" target="_blank" rel="noopener noreferrer" className="nav__link">
                    <img src={climactLogo} alt="Logo climact"/>
                </a>
            </nav>
        </header> 
    )
}

export default Header