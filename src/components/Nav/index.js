import React from "react";

function Nav(props) {
    return(
        <nav className ='nav'>
            <a href ="#" className = "brand">Gabriel Wagner</a>
            <ul className="navMenu">
                <li className="navItem"><a href="#" className="navLink">Home</a></li>
                <li className="navItem"><a href="#" className="navLink">About</a></li>
                <li className="navItem"><a href="#" className="navLink">Portfolio</a></li>
                <li className="navItem"><a href="#" className="navLink">Contact</a></li>
                <li className="navItem"><a href="#" className="navLink">Resume</a></li>
            </ul>
        </nav>
    )
}

export default Nav;