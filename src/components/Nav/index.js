import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	const [active, setActive] = useState('navMenu');
	const [toggleIcon, setToggleIcon] = useState('hamburger');
	const hamburgerToggle = () => {
		active === 'navMenu' ? setActive('navMenu navActive') : setActive('navMenu');

		//ToggleIcon

		toggleIcon === 'hamburger' ? setToggleIcon('hamburger toggle') : setToggleIcon('hamburger');
	};

	const [activeNav, setActiveNav] = useState('#');
	return (
		<nav className='nav'>
			<Link to='/' className='brand'>
				Gabriel Wagner
			</Link>
			<ul className={active}>
				<li className='navItem'>
					<Link to='/about' className='navLink'>
						About
					</Link>
				</li>
				<li className='navItem'>
					<Link to='/resume' className='navLink'>
						Resume
					</Link>
				</li>
				<li className='navItem'>
					<Link to='/portfolio' className='navLink'>
						Portfolio
					</Link>
				</li>
				<li className='navItem'>
					<Link to='/contact' className='navLink'>
						Contact
					</Link>
				</li>
			</ul>
			<div onClick={hamburgerToggle} className={toggleIcon}>
				<div className='line1'></div>
				<div className='line2'></div>
				<div className='line3'></div>
			</div>
		</nav>
	);
}

export default Nav;
