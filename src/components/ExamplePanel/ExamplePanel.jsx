import React from 'react';
import './ExamplePanel.scss';

const ExamplePanel = ({ textColor, backgroundColor }) => (
	<section
		className="example-panel"
		style={{ backgroundColor, color: textColor }}
	>
		{console.log('example')}
		<h1>Contrast Evaluator</h1>
		<p>
			Change the text and background colors with the inputs below to see if the
			contrast ratio meets the levels proposed by the WCAG. In this panel you
			can see the graphic example of the defined contrast.
		</p>
	</section>
);

export default ExamplePanel;
