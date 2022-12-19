import './App.css';
import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar.jsx";
import {Routes , Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import PuffLoader from 'react-spinners/PuffLoader';
import {lazy, Suspense} from "react";
const Contact = lazy(() => import("./components/pages/Contact"))

const override = {
    display: "block",
    margin: "0 auto",
    translate : "0 40vh",
    color: "202020"
};

function App() {

    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        setTimeout(() => setLoading(false), 4000);
    }, [])

  return (
      <>
      {loading && <PuffLoader
          size={50}
          color="#252525"
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
      /> }

        {!loading && <>
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
        </>}
      </>
  )

}

export default App;
