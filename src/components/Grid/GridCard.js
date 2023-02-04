import React from "react"
import data from "../../data"
import data1 from "../../data1.js"
import { Link } from 'react-router-dom';


// This component is just an individual "box". Includes, image, h1. Image of brand/console and name of brand/console.
// Also applies to the page where the controllers are. (NOT FINALIZED IDEA YET)

function GridCard(){
    
    // entry refers to either brand/console
    const data = 
            data1.map(item => (
                <Link to={`/${item.brand}`}>
                    <div className="grid">
                        <React.Fragment key={item.id}>
                            <img className="grid-img" src={item.img}></img>
                            <h1 style={{color: "black"}}>{item.brand}</h1>
                            {/* {item.consoles && item.consoles.map(console => (<p key={console}>{console}</p>))} */}
                        </React.Fragment>
                    </div>
                </Link>
            ))

    return (
        <div>
            <div> {/* This div contains the image and name. Border color should be (color) 
                      Make this div clickable and move you to the brand/console you select */}
                <img></img> {/* Create map function to show the image that corresponds to where on the webpage it is at. 
                            Example: localhost:3000 should render images for the brand.
                                     localhost:3000/Nintendo should render images for Nintendo's consoles */}

                <div className="grid-wrapper">
                    {data}
                </div>

                <p></p> {/* Create map function to show the name of the key that contains the image above. 
                              Or this could be the image alt tag but, **no don't do that.** */}
            </div>
        </div>
    )
}

export default GridCard