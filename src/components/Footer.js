import React from 'react';
import {Button} from "./Button";
import './Footer.css'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className="footer-subscription-heading">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim, in?
                </p>
                <p className="footer-subscription-text">
                    Lorem ipsum dolor sit amet.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name='email' placeholder='Your Email' className='footer-input'/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2 className='title'>About Us</h2>
                        <Link to="/">Lorem ipsum dolor.</Link><Link to="/">Iure optio, quisquam.</Link><Link to="/">Fuga,
                        laudantium tempore!</Link><Link to="/">Illo, quia, saepe?</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2 className='title'>Contact Us</h2>
                        <Link to="/">Lorem ipsum dolor.</Link><Link to="/">A, beatae necessitatibus.</Link><Link to="/">Aperiam,
                        dolorum, reiciendis.</Link><Link to="/">Dolorum, incidunt, provident.</Link>
                    </div>
                </div>

                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2 className='title'>About Us</h2>
                        <Link to="/">Lorem ipsum dolor.</Link><Link to="/">Beatae, repudiandae, similique.</Link><Link
                        to="/">Beatae doloremque, nihil?</Link><Link to="/">Et officia, tempore.</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2 className='title'>Contact Us</h2>
                        <Link to="/">Lorem ipsum dolor.</Link><Link to="/">Distinctio, quis, ullam.</Link><Link to="/">Consequuntur,
                        esse, soluta!</Link><Link to="/">Hic provident, voluptates.</Link>
                    </div>
                </div>

            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo title'>
                            Lolifmaster
                            <i className='fa-solid fa-code'/>
                        </Link>
                    </div>
                    <small className='website-rights'>Lolifmaster © 2022</small>
                    <div className='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f'/>
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram'/>
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube'/>
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter'/>
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin'/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Footer;