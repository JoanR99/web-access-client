import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ children, to }) => (
	<Link to={to} className="btn">
		{children}
	</Link>
);

export default Button;
