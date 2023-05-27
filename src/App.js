import React from 'react';
import './App.css';
import ResumeState from './Context/ResumeState';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Template from './Pages/Template/Template';
import Tips from './Pages/Tips/Tips'
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Login from './Pages/Login/login';
import Register from './Pages/Register/Register';


function App() {

  return (
    <ResumeState>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/templates" element={<Template />} />
          <Route exact path="/tips" element={<Tips />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;
