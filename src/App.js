import './App.css';
import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar.jsx";
import {Routes , Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Contact from "./components/pages/Contact";
import PuffLoader from 'react-spinners/PuffLoader';


const override = {
    display: "block",
    margin: "0 auto",
    translate : "0 40vh",
    borderColor: "red",
    color: "202020"
};

function App() {

    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 5000)
    }, [])

  return (
      <>
      {loading && <PuffLoader
          size={50}
          color="#252525"
          cssOverride={override}
          loading={loading}
          aria-label="Loading Spinner"
          data-testid="loader"
      /> }

        {!loading && <>
            <Navbar />
            <Routes>
                <Route path='/' element={
                    <Home/>
                }/>
                <Route path='/services' element={<Services/>} />
                <Route path='/sign-up' element={<SignUp/>} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>}
      </>
  )

}

export default App;
