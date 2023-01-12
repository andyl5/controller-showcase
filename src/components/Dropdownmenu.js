import React from "react";
import data from "../data";

function Dropdownmenu(props) {    
    return (
        // <div className="dropdown-menu">
        //     <ul className="dropdown-menu-content-ul">
        //         <div className="dropdown-menu-content">
        //             <li className="dropdown-menu-content">Gameboy</li>
        //             <li className="dropdown-menu-content">DSi</li>
        //             <li className="dropdown-menu-content">Wii</li>
        //             <li className="dropdown-menu-content">Nintendo Switch</li>
        //             <li className="dropdown-menu-content">Gameboy Connect Cube</li>
        //         </div>
        //     </ul>
        // </div>


        <div className="dropdown-menu">
            <ul className="dropdown-menu-content-ul">
                {data.map((data, key) => {
                    return (
                        <li className="dropdown-menu-content" key={key}>{data.systems}</li>
                    )
                })}
            </ul>

        </div>
    )
}
export default Dropdownmenu