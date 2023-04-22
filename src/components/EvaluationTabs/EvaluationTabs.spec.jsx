import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import EvaluationTabs from './EvaluationTabs';
import { MemoryRouter } from 'react-router-dom';

describe('Evaluation Tabs', () => {
	beforeEach(() => {
		render(<EvaluationTabs />, { wrapper: MemoryRouter });
	});
	it('should display url evaluation by default', () => {
		const tab = screen.getByRole('tab', { name: 'URL' });
		expect(tab).toBeInTheDocument();
		expect(tab).toHaveClass('tab--active');

		const input = screen.getByRole('textbox', { name: 'URL' });
		expect(input).toBeInTheDocument();
	});

	it('should display code evaluation by click the code tab', () => {
		const tab = screen.getByRole('tab', { name: 'Code' });
		expect(tab).toBeInTheDocument();
		expect(tab).toHaveClass('tab');

		fireEvent.click(tab);
		expect(tab).toHaveClass('tab--active');

		const input = screen.getByRole('textbox', { name: 'Code' });
		expect(input).toBeInTheDocument();
	});
});
