import React, {useState} from "react";
import Dropdownmenu from "./Dropdownmenu";

function NavbarButton() {

    const [isMenuVisible, setMenuVisible] = useState(false);

    return (
        <div>
            <button
                // onMouseEnter={() => setButtonVisible(true)}
                // onMouseLeave={() => setMenuVisible(false)}
                onClick={() => {
                    setMenuVisible(!isMenuVisible)
                }}
            >Nintendo</button>

            {isMenuVisible && (
                <Dropdownmenu
                onMouseLeave={() => setMenuVisible(false)}
                />
            )}

        </div>
    )
}

export default NavbarButton