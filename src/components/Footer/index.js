import React, {useState} from 'react'
import { FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import Nav from '../Nav'


const Footer = () => {
    const [active, setActive] = useState('iconActive')
    const iconView = () => {
        active === 'iconActive'
        ? setActive('footer iconActive')
        : setActive ('iconActive')
    }
  return (
    <footer>
      <div className={active}>
        <div className="footerIcons">
        <a href="https://github.com/wagnergabe" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/" target="blank" rel="noopener noreferrer"><BsLinkedin /></a>
        </div>
      </div>

      {/* <div className="footerCopyright">
        <small>&copy;2022</small>
      </div> */}
    </footer>
  )
}

export default Footer