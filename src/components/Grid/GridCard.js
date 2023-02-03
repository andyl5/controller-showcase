import React from "react"
import data from "../../data"
import data1 from "../../data"


// This component is just an individual "box". Includes, image, h1. Image of brand/console and name of brand/console.
// Also applies to the page where the controllers are. (NOT FINALIZED IDEA YET)

function GridCard(){
    
    // entry refers to either brand/console
    const names = data.map((name.brand => <p>{name}</p>));

    return (
        <div>
            <div> {/* This div contains the image and name. Border color should be (color) 
                      Make this div clickable and move you to the brand/console you select */}
                <img></img> {/* Create map function to show the image that corresponds to where on the webpage it is at. 
                            Example: localhost:3000 should render images for the brand.
                                     localhost:3000/Nintendo should render images for Nintendo's consoles */}
                <p>{names}</p> {/* Create map function to show the name of the key that contains the image above. 
                              Or this could be the image alt tag but, **no don't do that.** */}
            </div>
        </div>
    )
}

export default GridCard