import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

import GridCard from '../components/Grid/GridCard'

import data1 from '../data1'

function getBrandData(){
    return (
        data1.map(item => (
            <div key={item.id}>
                <GridCard title={item.brand} img={item.img}/>
            </div>
        ))
    )
}

function BrandPage(){

    // const data = 
    //     data1.map(item => (
    //         <Link to={`/${item.brand}`}>
    //             <div className="grid" key={item.id}>
    //                 <React.Fragment key={item.id}>
    //                     {/* <img className="grid-img" src={item.img}></img>
    //                     <h1 style={{color: "black"}}>{item.brand}</h1> */}

    //                 </React.Fragment>
    //             </div>
    //         </Link>
    //     ))

    // const data =
    //     data1.map(item => (
    //         <div key={item.id}>
    //             <GridCard title={item.brand} img={item.img}/>
    //         </div>
    //     ))

    return (
        <div className='grid-wrapper'>
            {getBrandData()}
        </div>
    );
}

export default BrandPage