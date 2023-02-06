import React from "react"
import data from '../../data';

function ControllerColorChoice(props) {

    // **USES data FROM OLD data.js**

    // This line below is hardcoded. Please change later on
    const colors = data[0].consoles[0].controllers[0].colors;

    return Object.keys(colors).map((color, index) => {
        const imagePath = colors[color]; 
  
    return (
        <div style={{margin: "10px", backgroundColor: "teal"}}>
            <img style={{width: "300px"}} key={index} src={imagePath} alt={`${color} Gamecube Controller`} />
            <p style={{color: "white"}}>{Object.keys(colors)[index]}</p>
        </div>
    )
    });
}

export default ControllerColorChoice
