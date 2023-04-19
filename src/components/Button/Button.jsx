import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

export const Button = ({ children, disabled }) => (
	<button className="btn" disabled={disabled}>
		{children}
	</button>
);

export const ButtonLink = ({ children, to }) => (
	<Link to={to} className="btn">
		{children}
	</Link>
);

export default Button;
