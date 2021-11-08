import React from 'react'
import { Link, Outlet } from "react-router-dom";

function NavBar() {
	return (
		<>
			<nav className='nav'>
				<ul className='nav__list'>
					<li className='nav__item'>
						<Link to="/" className='nav__link' >Home</Link>
					</li>
					<li>
						<Link to="about" className='nav__link' >About</Link>
					</li>
					<li>
						<Link to="posts" className='nav__link' >Posts</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	)
}

export default NavBar
