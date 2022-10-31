import React from 'react';
import Carditem from "./Carditem";
import './Cards.css'
function Cards() {
    return (
        <div className='cards'>
            <h1 className='title'> Check out these Epic Places bruh</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem src={require('../images/img-9.jpg')}
                                  text="Explore the hidden jungle in Africa u bois"
                                  label="Adventure" path='/services'
                        />
                        <Carditem src={require('../images/img-4.jpg')}
                                      text="Play your best football game on an Island"
                                  label="Island" path='/services'
                        />
                    </ul>

                    <ul className="cards__items">
                        <Carditem src={require('../images/img-2.jpg')}
                                  text="Explore Best beaches"
                                  label="Beach" path='/services'/>
                        <Carditem src={require('../images/img-3.jpg')}
                                  text="Go deeper than anyone in the open sea"
                                  label="Deep Sea" path='/services'/>
                        <Carditem src={require('../images/img-7.jpg')}
                                  text="Discover your self and live your best life"
                                  label="Discover" path='/services'/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;