import React from 'react';
import { Link } from 'react-router-dom';
import './SelectEvaluationType.scss';

import { CardIcon, NetIcon, CodeIcon } from '../../components';

const SelectEvaluationType = () => (
	<div className="select-evaluation-type">
		<h2 className="heading-2 heading-2--primary">Accessibility Evaluation</h2>
		<div className="cards-container">
			<Link to="url">
				<CardIcon title="URL" Icon={NetIcon} />
			</Link>
			<Link to="code">
				<CardIcon title="Code" Icon={CodeIcon} />
			</Link>
		</div>
	</div>
);

export default SelectEvaluationType;
