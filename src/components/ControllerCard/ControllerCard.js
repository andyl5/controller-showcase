import React from "react"

// import gamecube_controller from "../../images/gamecube_controllers/gc_indigo.png"
import ControllerColorChoice from "./ControllerColorChoice"
import DetailsDropdown from "./DetailsDropdown"
import Accordion from "./Accordion"
import data from "../../data"

function ControllerCard() {


    // NEED TO RENAME THIS COMPONENT TO ConsoleControllers. Then make this component ControllerCard the individual popup when user clicks on this current component
    // refer to documentation for new design changes

    return(
        <div className="controller-card">
            <h1>Gamecube Controller</h1>
            {/* component with side scrolling */}
            <div className="controller-colors">
                <ControllerColorChoice/>
            </div>

            {/* paragraph component that's a dropdown for details */}
            {/* <DetailsDropdown title="Extend Details"/> */}
          {/* <Accordion data={data}/> */}



            {/* another paragraph component that's a dropdown for product information */}
            {/* <DetailsDropdown title="Product Information"/> */}

        </div>
    )
}

export default ControllerCard