import './App.css';
import React from "react";
import Navbar from "./components/Navbar.jsx";
import {Routes , Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import {lazy, Suspense} from "react";
const Contact = lazy(() => import("./components/pages/Contact"))

function App() {

  return (
      <>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/services' element={<Services/>} />
              <Route path='/sign-up' element={<SignUp/>} />
              <Route path='/contact' element={
                  <Suspense fallback={<p style={{textAlign: "center"}}> Loading ... </p>}>
                      <Contact />
                  </Suspense>
              } />
          </Routes>
      </>
  )

}

export default App;
