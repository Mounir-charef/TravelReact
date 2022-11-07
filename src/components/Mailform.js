import React from 'react';
import {Button} from "./Button";
import './Form.css';

const loggin = ( ) => {
    console.log('lggin');
}

function Mailform() {
    return (
        <div className='form-container'>
            <div className='form-wrap'>
                <h1 className='form-title'> Contact us </h1>
                <div className="form-box">
                    <form className='form-content'>

                        <input className='form-item' type="text" name='name' placeholder='Name'/>
                        <input className='form-item' type="email" name='email' placeholder='Email'/>
                        <textarea className='form-item' name="content" id="text" cols="30" rows="5" placeholder='Message'></textarea>

                        <Button buttonStyle='btn--outline' buttonSize='btn--large' type='submit' onClick={loggin}>
                            SEND
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Mailform;