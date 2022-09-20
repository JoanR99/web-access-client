import React from 'react';
import './RequestStatusCard.scss';

const RequestStatusCard = ({ children, status }) => (
	<div
		className={`status-card ${
			status == 'error' ? 'status-card--error' : 'status-card--success'
		}`}
	>
		{children}
	</div>
);

export default RequestStatusCard;
