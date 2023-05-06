import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../screens/Home/Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home', () => {
	describe('layout', () => {
		beforeEach(() => {
			render(<Home />, { wrapper: MemoryRouter });
		});
		it('should have accessibility evaluation section', () => {
			const heading = screen.queryByText(
				'We want to help you make the web more accessible'
			);

			const paragraph = screen.queryByText(
				/Evaluate the accessibility of your websites/
			);

			expect(heading).toBeInTheDocument();
			expect(paragraph).toBeInTheDocument();
		});
		it('should have contrast evaluation section', () => {
			const heading = screen.queryByText(
				'Choose the right colors for your website'
			);

			const paragraph = screen.queryByText(
				/Check the contrast between the colors/
			);

			expect(heading).toBeInTheDocument();
			expect(paragraph).toBeInTheDocument();
		});
	});
});
