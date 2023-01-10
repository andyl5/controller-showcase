import React, {useState, useEffect, useRef} from "react";
import Dropdownmenu from "./Dropdownmenu";

function NavbarButton() {

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

    // return () => {
    //     document.removeEventListener();
    // }
    })

    return (
        <div>
            <div ref={menuRef}>
                <button onClick={handleMenuOpen}>Nintendo</button>
                {menuOpen ? (
                    <Dropdownmenu/>
                    ) : null}
            </div>
        </div>
    )
}

export default NavbarButton