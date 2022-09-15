import React from 'react'
import gabeImage from '../../images/Oyamu.jpg'

const About = () => {
    return (
        <div className='aboutContainer'>
        <h1> About Me </h1>
            <img src={gabeImage} alt='Image of Gabriel Wagner'/>
            <p>Welcome to my First React Project!</p>
            <p>I am a soon-to-be graduate of the University of Minnesota's full-stack web developer program. </p>
            <p>Enjoy my site!</p>
        </div>
    )
}

export default About;