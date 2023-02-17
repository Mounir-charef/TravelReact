import React, {useState} from 'react';
import './Form.css';
import emailjs from 'emailjs-com'


function MailForm({setLoading}) {

    const [name, setName] = useState(''),
        [email, setEmail] = useState(''),
        [content, setContent] = useState(''),
        [click, setClick] = useState(false);


    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm('service_czd3flg', 'template_auqe7vo', e.target, 'SGdIuvI3-356t5H34')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        // 👇️ clear all input values in the form
        setName('');
        setEmail('');
        setContent('');
        setClick(true);
    }


    return (
        <div className='form-container'>
            <img className='bg-img' src={require("../images/img-1.webp")} alt='background-img' onLoad={() => {
                setLoading(false)
            }}/>
            <div className='form-wrap'>
                <h1 className='form-title'> Contact us </h1>
                {click && <h3 className='form-confirmation'> EMAIL SENT </h3>}
                <div className="form-box">
                    <form id='form1' className='form-content' onSubmit={sendEmail}>

                        <input className='form-item' type="text" name='name' placeholder='Name' value={name} onChange={e => setName(e.target.value)} required/>
                        <input className='form-item' type="email" name='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required/>
                        <textarea className='form-item' name="content" id="text" cols="30" rows="5" placeholder='Message' onChange={e => setContent(e.target.value)} value={content} required></textarea>

                        <input type="submit" className='submit--outline submit--medium'/>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default MailForm;