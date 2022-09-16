import React from "react";
import Thingswanted from '../../images/things-wanted.png'
import furpets from '../../images/furPets.png'

const Portfolio = () => {
    return (
        <div className='portfolioContainer'>
            <h1> Portfolio</h1>
            <h3>Things Wanted</h3>
            <a href="https://shielded-mountain-23922.herokuapp.com/login">
                <img src={Thingswanted} />
            </a>
            <h3>Furever Pets</h3>
            <a href="https://wagnergabe.github.io/Group-Project-1/">
                <img src = {furpets} />
            </a>
            <h3>Run Buddy</h3>
            <a href="https://lernantino.github.io/run-buddy/"> 
                <img src = {furpets} />
            </a>
        </div>
    )
}

export default Portfolio;