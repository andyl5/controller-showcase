import React from "react"
import gamecube_controller from "../../images/gamecube_controller.png"
import ControllerColorChoice from "./ControllerColorChoice"
import DetailsDropdown from "./DetailsDropdown"
import Accordion from "./Accordion"
import data from "../../data"

function ControllerCard() {
    return(
        <div className="controller-card">
            {/* <h1>Gamecube Controller</h1> */}
            <h1></h1>
            <img src={gamecube_controller} style={{width: "30%"}}></img>
            {/* component with side scrolling */}
            <ControllerColorChoice/>

            {/* paragraph component that's a dropdown for details */}
            {/* <DetailsDropdown title="Extend Details"/> */}
          <Accordion data={data}/>



            {/* another paragraph component that's a dropdown for product information */}
            <DetailsDropdown title="Product Information"/>

        </div>
    )
}

export default ControllerCard