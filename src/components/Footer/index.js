import React, {useState} from 'react'
import { FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { BsStackOverflow } from 'react-icons/bs'


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
        <a href="https://github.com/wagnergabe"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/gabriel-wagner-8559b0ab?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbIotrpX9T5e0qVMGOaVNTA%3D%3D"><BsLinkedin /></a>
        <a href= "https://stackoverflow.com/users/20016504/gabriel-wagner?tab=profile"><BsStackOverflow /></a>
        </div>
      </div>

      {/* <div className="footerCopyright">
        <small>&copy;2022</small>
      </div> */}
    </footer>
  )
}

export default Footer