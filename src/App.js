import './App.css';
import React from "react";
import Navbar from "./components/Navbar.jsx";
import {Routes , Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
          <Navbar />
          <Routes>
              <Route path='/' element={
                  <Home/>
              }/>
              <Route path='/services' element={<Services/>} />
              <Route path='/sign-up' element={<SignUp/>} />
              <Route path='/contact' element={<Contact />} />
          </Routes>
    </>
  );
}

export default App;
