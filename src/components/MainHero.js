import React from 'react';
import './MainHero.css'
import {Button} from "./Button";
function MainHero() {
    return (
        <div className="hero-container">
            <video preload="none" src={require("../videos/video-1.mp4")} autoPlay loop muted/>
            <h1 className='title'>ADVENTURE AWAITS</h1>
            <p>What is u doinnng</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'> WATCH TRAILER <i className='far fa-play-circle'></i></Button>
            </div>
        </div>
    );
}

export default MainHero;