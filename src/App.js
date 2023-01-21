import './App.css';
import Homepage from './pages/Homepage';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";


import ControllerCard from './components/ControllerCard/ControllerCard';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/Gamecube" element={<ControllerCard/>}/>

        {/* <Route path="/:consoleName" component={<ControllerCard/>} /> */}
        {/* Routing to each console page is incorrect so far */}
      </Routes>
    </Router>
  );
}

export default App;
