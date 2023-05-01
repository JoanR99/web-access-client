import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import ContrastEvaluation from './ContrastEvaluation';

describe('Contrast Evaluation', () => {
	const defaultTextColor = '#ffffff';
	const defaultBackgroundColor = '#1A8FE3';

	it('should render page with default state', () => {
		render(<ContrastEvaluation />);

		const examplePanel = screen.getByRole('contentinfo');
		expect(examplePanel).toBeInTheDocument();
		expect(examplePanel).toHaveStyle({
			color: defaultTextColor,
			backgroundColor: defaultBackgroundColor,
		});

		const status = screen.getByText((content) =>
			content.includes('Meets the level')
		);

		expect(status).toBeInTheDocument();
		expect(status).toHaveStyle('color: green;');

		const textColorInput = screen.getByLabelText(/Text Color/i);
		expect(textColorInput).toBeInTheDocument();

		const backgroundColorInput = screen.getByLabelText(/Background Color/i);
		expect(backgroundColorInput).toBeInTheDocument();
	});

	it('should change text color on example panel and status when text color input change', () => {
		render(<ContrastEvaluation />);

		const examplePanel = screen.getByRole('contentinfo');
		expect(examplePanel).toHaveStyle({
			color: defaultTextColor,
			backgroundColor: defaultBackgroundColor,
		});

		const status = screen.getByText((content) =>
			content.includes('Meets the level')
		);
		expect(status).toHaveStyle('color: green;');

		const textColorInput = screen.getByLabelText(/Text Color/i);

		fireEvent.change(textColorInput, {
			target: { value: defaultBackgroundColor },
		});

		expect(examplePanel).toHaveStyle({
			color: defaultBackgroundColor,
			backgroundColor: defaultBackgroundColor,
		});
		expect(status).toHaveStyle('color: red;');
	});

	it('should change background color on example panel and status when background color input change', () => {
		render(<ContrastEvaluation />);

		const examplePanel = screen.getByRole('contentinfo');
		expect(examplePanel).toHaveStyle({
			color: defaultBackgroundColor,
			backgroundColor: defaultBackgroundColor,
		});

		const status = screen.getByText((content) =>
			content.includes('It does not meet')
		);
		expect(status).toHaveStyle('color: red;');

		const backgroundColorInput = screen.getByLabelText(/Background Color/i);

		fireEvent.change(backgroundColorInput, {
			target: { value: defaultTextColor },
		});

		expect(examplePanel).toHaveStyle({
			color: defaultBackgroundColor,
			backgroundColor: defaultTextColor,
		});
		expect(status).toHaveStyle('color: green;');
	});
});
