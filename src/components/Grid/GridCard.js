import React from "react"
import data from "../../data"
import data1 from "../../data1.js"
import { Link, useParams } from 'react-router-dom';


// This component is just an individual "box". Includes, image, h1. Image of brand/console and name of brand/console.

// Below comment might not be relevant, aka SOLVED
// Also applies to the page where the controllers are. (NOT FINALIZED IDEA YET)

// GridCard can take in a props.title and props.image | Every single time a grid is called, (brands,consoles,controllers) that exact 
// specification is needed. Then all this GridCard component does is just render the title and image.
// Though there will need to be separate components for the screens that show brands/consoles/controllers, since they require specific
// and props when mapping through the data to get what is needed.

function GridCard(props){
    return (
        // Code below is not needed anymore. The notes may still be relevant.
        //     <div> {/* This div contains the image and name. Border color should be (color) 
        //               Make this div clickable and move you to the brand/console you select */}
        //         <img></img> {/* Create map function to show the image that corresponds to where on the webpage it is at. 
        //                     Example: localhost:3000 should render images for the brand.
        //                              localhost:3000/Nintendo should render images for Nintendo's consoles */}

        //         <p></p> {/* Create map function to show the name of the key that contains the image above. 
        //                       Or this could be the image alt tag but, **no don't do that.** */}
        //     </div>

        <div>
            {/* FIX LINE BELOW. It should do /brand/Console. It current does /Nintendo --> /Gamecube */}
            {/* <Link to={`/${props.title}`}> */}
            <Link to={`${props.link}`}>


                <div className="grid">
                    <img className="grid-img" src={props.img} alt="img"></img>
                    <h1 style={{color: "black"}}>{props.title}</h1>
                </div>
            </Link>
        </div>
    )
}

export default GridCard