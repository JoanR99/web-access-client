import React from 'react';
import './ColorInputs.scss';
import { ColorPicker } from '..';
import { useAtom } from 'jotai';
import { textColorAtom, backgroundColorAtom } from '../../atoms';

const ColorInputs = () => {
	const [textColor, setTextColor] = useAtom(textColorAtom);
	const [backgroundColor, setBackgroundColor] = useAtom(backgroundColorAtom);

	return (
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
};

export default ColorInputs;
