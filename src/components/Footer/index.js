import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <div className="footerIcons">
        <a href="https://github.com/wagnergabe" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/" target="blank" rel="noopener noreferrer"><BsLinkedin /></a>
      </div>

      {/* <div className="footerCopyright">
        <small>&copy;2022</small>
      </div> */}
    </footer>
  )
}

export default Footer