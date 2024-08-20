import React from 'react'
import gabeImage from '../../images/Oyamu.jpg'

const About = () => {
    return (
        <div className='aboutContainer'>
        <h1> About Me </h1>
            <img src={gabeImage} alt='Image of Gabriel Wagner'/>
            <p>Hello and welcome to my first React project!</p>
            <p>I've made some progress in my coding adventure. My journey includes:</p>
                <ul>
                    <li>Full-Stack web development from the University of Minnesota</li>
                    <li>Artificial Intelligence Program from the University of Oxford</li>
                    <li>AWS Cloud fundamentals</li>
                    <li>Computer Science studies from Harvard University</li>
                </ul>
                        <p>Feel free to explore my site, and I hope you enjoy what you see!</p>
        </div>
    )
}

export default About;