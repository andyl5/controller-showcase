import React from "react"
import gamecube_controller from "../../images/gamecube_controller.png"

function ControllerColorChoice(props) {
    return (
        <div className="color-picker">
            <p>Color: Insert Color Choice</p>
            {/* <img src={props.image}></img> */}

            {/* CENTER THE IMAGES */}
            <div className="controller-colors">                
                <img src={gamecube_controller} style={{width: "5%"}}></img>
                <img src={gamecube_controller} style={{width: "5%"}}></img>
                <img src={gamecube_controller} style={{width: "5%"}}></img>
                <img src={gamecube_controller} style={{width: "5%"}}></img>
                <img src={gamecube_controller} style={{width: "5%"}}></img>
            </div>
        </div>
    )
}

export default ControllerColorChoice