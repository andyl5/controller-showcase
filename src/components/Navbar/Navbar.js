import React from "react"
import logo from "../../images/logo.png"
import NavbarButton from "./NavbarButton"

function Navbar(){
    return (
        <div>
            <img className="logo-center" src={logo}></img>
            <div className="dropdown-navbar">
                <NavbarButton name="Nintendo"/>
                <NavbarButton name="Sega"/>
                <NavbarButton name="Playstation"/>
                <NavbarButton name="Xbox"/>
                <NavbarButton name="Miscellaneous"/>
            </div>
        </div>
    )
}

export default Navbar