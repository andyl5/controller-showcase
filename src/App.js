import './App.css';
import Homepage from './pages/Homepage';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";


import ControllerCard from './components/ControllerCard/ControllerCard';
import Accordion from './components/ControllerCard/Accordion';

function App() {
  return (
    // <div>
    //   <Homepage/>
    //   {/* <ControllerCard/> */}
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
