import { useAtom } from 'jotai';
import React from 'react';
import { textColorAtom, backgroundColorAtom } from '../../atoms';
import './ExamplePanel.scss';

const ExamplePanel = () => {
	const [textColor] = useAtom(textColorAtom);
	const [backgroundColor] = useAtom(backgroundColorAtom);

	return (
		<section
			className="example-panel"
			style={{ backgroundColor, color: textColor }}
			role="contentinfo"
		>
			<h1>Contrast Evaluator</h1>
			<p className="paragraph">
				Change the text and background colors with the inputs below to see if
				the contrast ratio meets the levels proposed by the WCAG. In this panel
				you can see the graphic example of the defined contrast.
			</p>
		</section>
	);
};
export default ExamplePanel;
