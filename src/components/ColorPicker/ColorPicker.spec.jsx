import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import ColorPicker from './ColorPicker';

describe('Color Picker component', () => {
	it('should render color input with label', () => {
		render(
			<ColorPicker
				color="#ffff"
				setColor={() => {}}
				title="Color Picker"
				id="color"
			/>
		);

		const label = screen.getByText('Color Picker');

		expect(label).toBeInTheDocument();
		expect(label).toHaveAttribute('for', 'color');
		expect(label).toHaveClass('paragraph');

		const input = screen.getByLabelText('Color Picker');

		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('type', 'color');
		expect(input).toHaveAttribute('id', 'color');
	});

	it('should call setColor on change', () => {
		const setColor = vi.fn();
		render(
			<ColorPicker
				color="#ffff"
				setColor={setColor}
				title="Color Picker"
				id="color"
			/>
		);

		const input = screen.getByLabelText('Color Picker');

		fireEvent.change(input, { target: { value: '#000000' } });

		expect(setColor).toHaveBeenCalled();
	});
});
