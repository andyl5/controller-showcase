import React from "react"
import Dropdownbar from "./Dropdownbar"
import logo from "../images/logo.png"

function Navbar(){
    return (
        <div>
            <img className="logo-center" src={logo}></img>
            <Dropdownbar/>
        </div>
    )
}

export default Navbar