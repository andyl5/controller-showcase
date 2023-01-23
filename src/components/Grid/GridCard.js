import React from "react";
import ControllerColorChoice from "../ControllerCard/ControllerColorChoice.js"


function GridCard(props) {
    return (
        <div className="controller-card">
            <div className="controller-colors">
                <ControllerColorChoice/>
            </div>
        </div>
    )
}

export default GridCard