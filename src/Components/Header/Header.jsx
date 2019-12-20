import React from "react"

import "./Header.css"

const ecfLogo = process.env.PUBLIC_URL + '/static/img/logo-ecf.png'
const cwLogo = process.env.PUBLIC_URL + '/static/img/logo-cw.png'
const climactLogo = process.env.PUBLIC_URL + '/static/img/logo-climact.png'

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