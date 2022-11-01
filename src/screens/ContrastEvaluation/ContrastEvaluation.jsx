import React from 'react';
import './ContrastEvaluation.scss';
import { ColorInputs, ExamplePanel, StatusPanel } from '../../components';

const ContrastEvaluation = () => (
	<div className="contrast-page">
		<ExamplePanel />
		<StatusPanel />
		<ColorInputs />
	</div>
);

export default ContrastEvaluation;
