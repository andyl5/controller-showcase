import React from "react";
import Dropdownmenu from "./Dropdownmenu";

function Dropdownbar() {
    return (
        <div>
            <div className="dropdown-navbar">
                <button className="dropdown" type="button">Click Me!</button>
                <button className="dropdown" type="button">Click Me!</button>
                <button className="dropdown" type="button">Click Me!</button>
                <button className="dropdown" type="button">Click Me!</button>
                <button className="dropdown" type="button">Click Me!</button>
            </div>
            <Dropdownmenu/>
        </div>
    )
}
export default Dropdownbar