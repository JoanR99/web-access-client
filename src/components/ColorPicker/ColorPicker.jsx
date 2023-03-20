import React from 'react';
import './ColorPicker.scss';

const ColorPicker = ({ color, setColor, title, id }) => {
	return (
		<div className="color-picker">
			<label className="paragraph" htmlFor={id}>
				{title}
			</label>
			<input
				type="color"
				value={color}
				onChange={(e) => setColor(e.target.value)}
				id={id}
			/>
		</div>
	);
};

export default ColorPicker;
