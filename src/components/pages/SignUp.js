import React, {useState} from 'react';
import PuffLoader from "react-spinners/PuffLoader";

const override = {
    display: "block",
    margin: "0 auto",
    translate : "0 40vh",
    color: "202020"
};

function SignUp() {
    const [loadingSignUp, setLoadingSignUp] = useState(true)
    return (
        <>
            {loadingSignUp && (
                <PuffLoader
                    size={50}
                    color="#252525"
                    cssOverride={override}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            )}
            <div className='services' style={loadingSignUp ? {display: 'none'} : {}}>
                <img className='bg-img' src={require('../../images/img-8.webp')} alt='background-img' onLoad={() => {
                    setLoadingSignUp(false)
                }}/>
                <h1 className='title'> Sign Up</h1>
            </div>
        </>
    );
}

export default SignUp;