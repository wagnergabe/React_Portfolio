import React, {useState} from "react";

function Nav() {
    const [active, setActive] = useState('navMenu')
        const hamburgerToggle = () => {
            active === 'navMenu'
            ? setActive('navMenu navActive')
            : setActive('navMenu');
        };


    return(
        <nav className ='nav'>
            <a href ="#" className = "brand">
                Gabriel Wagner
                </a>
            <ul className={active}>
                <li className="navItem"><a href="#" className="navLink">Home</a></li>
                <li className="navItem"><a href="#" className="navLink">About</a></li>
                <li className="navItem"><a href="#" className="navLink">Portfolio</a></li>
                <li className="navItem"><a href="#" className="navLink">Contact</a></li>
            </ul>
            <div onClick ={hamburgerToggle} className="hamburger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
                
            </div>
        </nav>
    )
}

export default Nav;