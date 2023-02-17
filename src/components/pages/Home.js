// import '../../App.css'
import MainHero from "../MainHero.js";
import React, {useState} from "react";
import Cards from "../Cards";
import Footer from "../Footer";
import PuffLoader from 'react-spinners/PuffLoader';


const override = {
    display: "block",
    margin: "0 auto",
    translate : "0 40vh",
    color: "202020"
};

function Home() {
    const [loading, setLoading] = useState(true)

    return (
        <>
            {loading && (
                <PuffLoader
                    size={50}
                    color="#252525"
                    cssOverride={override}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            )}

            <div style={loading ? {display: 'none'} : {}}>
                <MainHero setLoading={setLoading}/>
                <Cards />
                <Footer />
            </div>
        </>
    )
}

export default Home;