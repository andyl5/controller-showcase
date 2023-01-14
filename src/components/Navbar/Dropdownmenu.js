import React from "react";
import data from "../../data";

function Dropdownmenu(props) {    
    return (
        <div className="dropdown-menu">
            <ul className="dropdown-menu-content-ul">
                {data.filter(brand => brand.brand === props.brand).map((brand, key) => {
                    return brand.consoles.map((console, index) => (
                        <li className="dropdown-menu-content" key={index}>{console.name}</li>
                    ))
                })}
            </ul>
        </div>

    )
}
export default Dropdownmenu