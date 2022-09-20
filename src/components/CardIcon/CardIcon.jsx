import React from 'react';
import './CardIcon.scss';

const CardIcon = ({ title, Icon }) => (
	<article className="card-icon">
		<h2 className="heading-2">{title}</h2>
		<Icon className="icon" />
	</article>
);

export default CardIcon;
