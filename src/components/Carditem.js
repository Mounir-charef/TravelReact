import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Carditem(props) {
    const [loaded, setLoaded] = useState(false)
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src}
                             alt="Travel img"
                             className="cards__item__img"
                             loading='lazy'
                             onLoad={() => {
                                 setLoaded(true);
                             }}
                        />
                        {!loaded && <Skeleton className='skeleton'/>}
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">
                            {props.text}
                        </h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default Carditem;