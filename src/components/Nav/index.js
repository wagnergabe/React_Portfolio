import React, {useState} from "react";

function Nav() {
    const [active, setActive] = useState('navMenu')
    const [toggleIcon, setToggleIcon] = useState('hamburger')
        const hamburgerToggle = () => {
            active === 'navMenu'
            ? setActive('navMenu navActive')
            : setActive('navMenu');

            //ToggleIcon

            toggleIcon === 'hamburger'
            ? setToggleIcon('hamburger toggle')
            : setToggleIcon('hamburger')
        };

        const [activeNav, setActiveNav] = useState('#')
    return(
        <nav className ='nav'>
            <a href ="#" className = "brand">
                Gabriel Wagner
                </a>
            <ul className={active}>
                <li className="navItem"><a href="#" onClick={() => setActiveNav('#home')} className="navLink">Home</a></li>
                <li className="navItem"><a href="#about" onClick={() => setActiveNav('#about')} className="navLink">About</a></li>
                <li className="navItem"><a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className="navLink">Portfolio</a></li>
                <li className="navItem"><a href="#Contact" onClick={() => setActiveNav('#Contact')} className="navLink">Contact</a></li>
            </ul>
            <div onClick ={hamburgerToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
                
            </div>
        </nav>
    )
}

export default Nav;