import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, Switch, useParams } from "react-router-dom";

import Homepage from './pages/Homepage';
import BrandPage from './pages/BrandPage';
import ConsolesPage from './pages/ConsolesPage';

import Console from './components/Grid/Console'

const urlArray = window.location.pathname.split("/").filter(part => part !== "");
console.log(urlArray);
console.log("hi");


function App() {
  return (

    // Before any Routes are added, remember that only **PAGES** should be rendered, not components! 
    <Router>
      <Routes>

        {/* <Route path="/" element={<Homepage/>}/> */}
        {/* <Route path="/" element={<BrandPage/>}/> */}
        
        {/* <Route path={`/${urlArray[0]}`} element={<ConsolesPage brand={urlArray[0]}/>}/> */}

        {/* <Route path={`/${urlArray[0]}`}>
          <Route index element={<ConsolesPage brand="Nintendo"/>}/>
          <Route path=":console" element={<Console/>}/>
        </Route> */}


        {/* <Route path="/Nintendo">
          <Route index element={<ConsolesPage brand="Nintendo"/>}/>
          <Route path=":console" element={<Console/>}/>
        </Route> */}

        <Route path="/">
          <Route index element={<BrandPage/>}/> {/* renders the brands Nintendo, PS, Xbox, Sega  */}
          <Route path=":brand" element={<ConsolesPage/>}> {/* this page renders the consoles, ex Gamecube Wii */}
            {/* <Route path=":console" element={<Console/>}/> */} {/* should render controllers for a console  */}
          </Route>
        </Route>


        {/* Below is for rendering controllers, once you're inside a specific console */}
        {/* <Route path={`/${urlArray[0]}/${urlArray[1]}`} element={<ControllerCard/>}/> */}

        {/* This line below will route to a brand's consoles. The 'name' prop will be passed into the componenet and correctly render that brand's consoles. */}
        {/* <Route path={`/${urlArray[0]}`} element={<ControllerCard name="Nintendo"/>}/> */}

      </Routes>
    </Router>
  );
}

export default App;
