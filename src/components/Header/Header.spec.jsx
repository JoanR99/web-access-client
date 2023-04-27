import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {
	beforeEach(() => {
		render(<Header />, { wrapper: MemoryRouter });
	});

	it('should render header component', () => {
		const header = screen.getByRole('navigation');
		expect(header).toBeInTheDocument();

		const logo = screen.getByText('WEBACCESS');
		expect(logo).toBeInTheDocument();

		const evaluationLink = screen.getByText('Evaluation');
		expect(evaluationLink).toBeInTheDocument();

		const contrastLink = screen.getByText('Contrast');
		expect(contrastLink).toBeInTheDocument();
	});

	it('should add active class on active link', () => {
		const evaluationLink = screen.getByText('Evaluation');
		expect(evaluationLink).toBeInTheDocument();
		expect(evaluationLink).not.toHaveClass('active');

		fireEvent.click(evaluationLink);
		expect(evaluationLink).toHaveClass('active');

		const contrastLink = screen.getByText('Contrast');
		expect(contrastLink).toBeInTheDocument();
		expect(contrastLink).not.toHaveClass('active');

		fireEvent.click(contrastLink);
		expect(contrastLink).toHaveClass('active');
	});
});
