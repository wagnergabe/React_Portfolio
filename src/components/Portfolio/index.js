import React from "react";
import Thingswanted from '../../images/things-wanted.png'
import furpets from '../../images/furPets.png'
import jate from '../../images/Jate.png'
import pizzaHunt from '../../images/pizzaHunt.jpg'
import workday from '../../images/Workday.png'
import quiz from '../../images/quiz.jpg'

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
            <h3>Pizza Hunt</h3>
            <a href="https://pizzahunt-bootcamp.herokuapp.com/"> 
                <img src = {pizzaHunt} />
            </a>
            <h3>Just Another Text Editor</h3>
            <a href="https://gabrielwagnerpwa.herokuapp.com/">
                <img src = {jate} />
            </a>
            <h3>Work Day Scheduler</h3>
            <a href="https://wagnergabe.github.io/UMN-Challenge-5/">
                <img src = {workday} />
            </a>
            <h3>JavaScript Quiz</h3>
            <a href="https://wagnergabe.github.io/code-quiz/">
                <img src = {quiz} />
            </a>
        </div>
    )
}

export default Portfolio;