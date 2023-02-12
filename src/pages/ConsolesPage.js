import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useParams, useLocation } from "react-router-dom";
import GridCard from '../components/Grid/GridCard';

import data1 from '../data1'


// This function returns a list of 
// function getConsoles(brand){
//     return (
//         data1.map(item => {
//             if (item.brand === brand){
//                 const consoles = item.consoles
//                 console.log(consoles)

//                 // console.log(Object.entries(consoles))

//                 // console.log(Object.keys(consoles))
//                 // return Object.keys(consoles)

//                 console.log(consoles)
//                 return consoles
//             }
//         })
//     )
// }


function ConsolesPage(props) {
    const {brand} = useParams()
    console.log(brand + " hi")
    console.log("from consolespage.js")

    const location = useLocation();
    console.log(location)

    function getConsolesArray(brand) {
        const foundItem = data1.find(item => item.brand === brand);
        const consoles = foundItem ? foundItem.consoles : [];
        return (
            consoles.map((console, index) => (
                // <GridCard title={console.name} img={console.img} link={brand+"/"+console.name}/>
                <GridCard title={console.name} img={console.img} link={location.pathname+"/"+console.name}/>
                // <p key={index}>{console.name}</p>
            ))
        )
    }

    return (            
        <div className='grid-wrapper'>
            {/* {getConsolesArray(props.brand)} */}
            {getConsolesArray(brand)}
            <p>{brand}</p>
            {console.log(brand)}
        </div>
    )
}

export default ConsolesPage