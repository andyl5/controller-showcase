import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

import data1 from '../data1'

// This function returns a list of 
function getConsoles(brand){
    return (
        data1.map(item => {
            if (item.brand === brand){
                const consoles = item.consoles
                console.log(consoles)

                // console.log(Object.entries(consoles))

                // console.log(Object.keys(consoles))
                // return Object.keys(consoles)

                console.log(consoles)
                return consoles
            }
        })
    )
}


function ConsolesPage(props) {
    
    const consoles = getConsoles(props.brand)

    return (
        <div>
            {/* TODO:
                Create function that maps through the data1 given the brand and renders all consoles title/images to
                the GridCard component */}
            {/* {getConsoles(props.brand)} */}
            {/* {consoles.map(item => {
                <p>{item}</p>
            })} */}
            
            <p>{}</p>


        </div>
    )
}

export default ConsolesPage