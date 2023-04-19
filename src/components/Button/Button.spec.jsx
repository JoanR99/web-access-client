import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Button, ButtonLink } from './Button';

describe('Button components', () => {
	describe('Classic Button', () => {
		beforeEach(() => {
			render(<Button>button</Button>);
		});

		it('should render button', () => {
			const button = screen.queryByRole('button', { name: /button/i });

			expect(button).toBeInTheDocument();

			expect(button).toHaveClass('btn');
		});
	});

	describe('Link Button', () => {
		beforeEach(() => {
			render(<ButtonLink to="href">button</ButtonLink>, {
				wrapper: MemoryRouter,
			});
		});

		it('should render button', () => {
			const button = screen.queryByRole('link', { name: /button/i });

			expect(button).toBeInTheDocument();

			expect(button).toHaveClass('btn');
			expect(button).toHaveAttribute('href', '/href');
		});
	});
});
