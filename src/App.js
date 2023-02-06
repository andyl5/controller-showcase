import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

import Homepage from './pages/Homepage';
import BrandPage from './pages/BrandPage';

import ControllerCard from './components/ControllerCard/ControllerCard';
import GridCard from './components/Grid/GridCard';
import ConsoleGridCard from './components/Grid/ConsoleGridCard';
import ConsolesPage from './pages/ConsolesPage';


const urlArray = window.location.pathname.split("/").filter(part => part !== "");
// console.log(`/${urlArray[1]}`)
console.log(urlArray)
console.log("hi")


function App() {
  return (

    // Before any Routes are added, remember that only **PAGES** should be rendered, not components! 
    <Router>
      <Routes>

        {/* <Route path="/" element={<Homepage/>}/> */}
      
        {/* <Route path="/" element={<GridCard/>}/> */}
        
        <Route path="/" element={<BrandPage/>}/>
        <Route path={`/${urlArray[0]}`} element={<ConsolesPage brand="Nintendo"/>}/>

        {/* <Route path={`/${urlArray[0]}`} element={<ConsoleGridCard brand={urlArray[0]}/>}/> */}


        {/* Below is for rendering controllers, once you're inside a specific console */}
        {/* <Route path={`/${urlArray[0]}/${urlArray[1]}`} element={<ControllerCard/>}/> */}

        {/* This line below will route to a brand's consoles. The 'name' prop will be passed into the componenet and correctly render that brand's consoles. */}
        {/* <Route path={`/${urlArray[0]}`} element={<ControllerCard name="Nintendo"/>}/> */}

      </Routes>
    </Router>
  );
}

export default App;
