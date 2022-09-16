import React from "react";
import Thingswanted from '../../images/things-wanted.png'

const Portfolio = () => {
    return (
        <div className='portfolioContainer'>
            <h1> Portfolio</h1>
            <h3>Things Wanted</h3>
            <a href="https://shielded-mountain-23922.herokuapp.com/login">
                <img src={Thingswanted} />
            </a>
        </div>
    )
}

export default Portfolio;