import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useParams, useLocation } from "react-router-dom";

import GridCard from '../components/Grid/GridCard'

import data1 from '../data1'


function BrandPage(){
    
    const location = useLocation()
    
    function getBrandData(){
        return (
            data1.map(item => (
                <div key={item.id}>
                    <GridCard title={item.brand} img={item.img} link={item.brand}/>
                </div>
            ))
        )
    }
    return (
        <div className='grid-wrapper'>
            {getBrandData()}
        </div>
    );
}

export default BrandPage