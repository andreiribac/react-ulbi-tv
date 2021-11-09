import React, { useContext} from 'react'
import { Link, Outlet } from "react-router-dom";
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context/context';

function NavBar() {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem('auth');
	}

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
				<MyButton onClick={logout}>Выйти</MyButton>
			</nav>
			<Outlet />
		</>
	)
}

export default NavBar
