import React from "react"
import Dropdownbar from "./Dropdownbar"
import logo from "../images/logo.png"
import NavbarButton from "./NavbarButton"

function Navbar(){
    return (
        <div>
            <img className="logo-center" src={logo}></img>
            {/* <Dropdownbar/> */}
            <NavbarButton/>
        </div>
    )
}

export default Navbar