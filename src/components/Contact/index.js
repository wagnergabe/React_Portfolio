import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';



function Contact() {

  return (
    <>
    <div className = "contact-container">
      <ul>
      <li><FontAwesomeIcon icon={faEnvelope}/><a href="mailto:wagner.s.gabriel@gmail.com">Email</a></li>
      <li><FontAwesomeIcon icon={faLinkedin}/><a href="www.linkedin.com/in/gabriel-wagner-8559b0ab">LinkedIn</a></li>
      <li><FontAwesomeIcon icon={faGithub}/><a href="https://github.com/wagnergabe">Github</a></li>
      </ul>
      </div>
    </>
  )
}

export default Contact;
