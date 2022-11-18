// import '../../App.css'
import MainHero from "../MainHero.js";
import React, {useEffect, useState} from "react";
import Cards from "../Cards";
import Footer from "../Footer";
import PuffLoader from 'react-spinners/PuffLoader'


const override = {
    display: "block",
    margin: "0 auto",
    translate : "0 40vh",
    borderColor: "red",
    color: "202020"
};


function Home() {

    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 5000)
    }, [])

    return (
        <div>
            {
                <PuffLoader
                    size={50}
                    color="#252525"
                    cssOverride={override}
                    loading={loading}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            }

            { !loading &&
                <>
                    <MainHero />
                    <Cards />
                    <Footer />
                </>
            }
        </div>
    )
}

export default Home;