import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
	return (
		<header className="header">
			<nav className="navbar container">
				<Link to="/" className="main-logo">
					WEBACCESS
				</Link>
				<ul className="navbar__list">
					<li className="navbar__item">
						<NavLink
							to="/evaluation"
							className={({ isActive }) =>
								isActive ? 'navbar__link active' : 'navbar__link'
							}
						>
							Evaluation
						</NavLink>
					</li>
					<li className="navbar__item">
						<NavLink
							to="/contrast"
							className={({ isActive }) =>
								isActive ? 'navbar__link active' : 'navbar__link'
							}
						>
							Contrast
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
