import React, { useState } from 'react';
import './ContrastEvaluation.scss';
import { ColorInputs, ExamplePanel, StatusPanel } from '../../components';

const ContrastEvaluation = () => {
	const [textColor, setTextColor] = useState('#ffffff');
	const [backgroundColor, setBackgroundColor] = useState('#1A8FE3');
	return (
		<div className="contrast-page">
			<ExamplePanel textColor={textColor} backgroundColor={backgroundColor} />
			<StatusPanel textColor={textColor} backgroundColor={backgroundColor} />
			<ColorInputs
				textColor={textColor}
				backgroundColor={backgroundColor}
				setTextColor={setTextColor}
				setBackgroundColor={setBackgroundColor}
			/>
		</div>
	);
};

export default ContrastEvaluation;
