import React, {useState} from 'react';
import MailForm from "../MailForm";
import PuffLoader from "react-spinners/PuffLoader";

const override = {
    display: "block",
    margin: "0 auto",
    translate : "0 40vh",
    color: "202020"
};


function Contact() {
    const [loadingContact, setLoadingContact] = useState(true)
    return (
        <>
            {loadingContact && (
                <PuffLoader
                    size={50}
                    color="#252525"
                    cssOverride={override}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            )}
            <div style={loadingContact ? {display: 'none'} : {}}>
                <MailForm setLoading={setLoadingContact}/>
            </div>
        </>
    );
}

export default Contact;