import React, {useState} from "react";
import Dropdownmenu from "./Dropdownmenu";

function NavbarButton() {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    };

    return (
        <div>
            <button 
            onClick={handleMenuOpen}>Nintendo</button>
            
            {menuOpen ? (
                <Dropdownmenu/>
            ) : null}
        </div>
    )
}

export default NavbarButton