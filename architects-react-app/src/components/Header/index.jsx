import React from 'react'

const Header = () => {
    return (
        <div className="w3-top w3-bar w3-white w3-wide w3-padding w3-card">
            <a href="#home" className="w3-bar-item w3-button"><b>BR</b> Architects</a>

            <div className="w3-right w3-hide-small">
                <a href="#projects" className="w3-bar-item w3-button">Projects</a>
                <a href="#about" className="w3-bar-item w3-button">About</a>
                <a href="#contact" className="w3-bar-item w3-button">Contact</a>
            </div>

        </div>
    )
}

export default Header