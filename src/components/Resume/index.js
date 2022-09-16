import React from 'react'
import {
    faNodeJs,
    faCss3Alt,
    faGithub,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
import { useEffect } from 'react'
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Resume = () => {

    return (
        <div className='container about-page'>
            <div className='text-zone'>
        <h3> Developer Skills: Full Stack</h3>
        <ul className='frontEnd'>Front-End</ul>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>Web/3rd-Party/Server-Side APIs</li>
          <li>React</li>
        <ul className='frontEnd'>Back-End</ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>SQL</li>
          <li>MongoDB</li>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#3c873a" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#211F1F" />
            </div>
          </div>
        </div>

        </div>
    )
}

export default Resume

//cube animation Source: https://www.youtube.com/watch?v=bmpI252DmiI&t=737s