import React, {useState} from 'react';
import PuffLoader from "react-spinners/PuffLoader";

const override = {
    display: "block",
    margin: "0 auto",
    translate : "0 40vh",
    color: "202020"
};

function Services() {
    const [loadingServices, setLoadingServices] = useState(true)
    return (
        <>
            {loadingServices && (
                <PuffLoader
                    size={50}
                    color="#252525"
                    cssOverride={override}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            )}
            <div className='services' style={loadingServices ? {display: 'none'} : {}}>
                <img className='bg-img' src={require('../../images/img-2.webp')} alt='background-img' onLoad={() => {
                    setLoadingServices(false)
                }}/>
                <h1 className='title'> Services</h1>
            </div>
        </>
    );
}

export default Services;