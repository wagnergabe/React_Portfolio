import React from "react";

function Nav() {
    return(
        <nav className ='nav'>
            <a href ="#" className = "brand">Gabriel Wagner</a>
            <ul className="navMenu">
                <li className="navItem"><a href="#" className="navLink">Home</a></li>
                <li className="navItem"><a href="#" className="navLink">About</a></li>
                <li className="navItem"><a href="#" className="navLink">Portfolio</a></li>
                <li className="navItem"><a href="#" className="navLink">Contact</a></li>
            </ul>
            <div className="hamburger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
                
            </div>
        </nav>
    )
}

export default Nav;