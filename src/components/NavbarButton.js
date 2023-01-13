import React, {useState, useEffect, useRef} from "react";
import Dropdownmenu from "./Dropdownmenu";

function NavbarButton(props) {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    };

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)){
                setMenuOpen(false);
            }
        };
    document.addEventListener("mousedown", handler);
    })

    return (
        <div>
            <div ref={menuRef}>
                <button className="dropdown-button" onClick={handleMenuOpen}>{props.name}</button>
                {menuOpen ? (
                    <Dropdownmenu brand={props.name}/>
                    ) : null}
            </div>
        </div>
    )
}

export default NavbarButton