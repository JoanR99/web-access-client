import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

export const Button = ({ children, disabled, onClick }) => (
	<button className="btn" disabled={disabled} onClick={onClick}>
		{children}
	</button>
);

export const ButtonLink = ({ children, to }) => (
	<Link to={to} className="btn">
		{children}
	</Link>
);

export default Button;
