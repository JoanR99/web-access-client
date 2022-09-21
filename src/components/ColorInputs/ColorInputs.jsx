import React from 'react';
import './ColorInputs.scss';
import { ColorPicker } from '..';

const ColorInputs = ({
	textColor,
	backgroundColor,
	setTextColor,
	setBackgroundColor,
}) => (
	<section className="color-inputs">
		<ColorPicker
			color={textColor}
			setColor={setTextColor}
			title="Text Color"
			id="text-color"
		/>

		<ColorPicker
			color={backgroundColor}
			setColor={setBackgroundColor}
			title="Background Color"
			id="background-color"
		/>
	</section>
);

export default ColorInputs;
