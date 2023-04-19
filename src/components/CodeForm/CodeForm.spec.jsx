import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import CodeForm from './CodeForm';

describe('Code form', () => {
	it('should render form', () => {
		render(<CodeForm isLoading={false} error={null} dispatch={() => {}} />);

		const form = screen.getByRole('form');

		expect(form).toBeInTheDocument();

		const textarea = screen.getByRole('textbox', { name: /code/i });

		expect(textarea).toBeInTheDocument();
		expect(textarea).toBeRequired();
		expect(textarea).toHaveAttribute('id', 'code');

		const button = screen.getByRole('button', { name: /evaluate/i });

		expect(button).toBeInTheDocument();
		expect(button).toBeEnabled();
	});

	it('should disable button when isLoading is true', () => {
		render(<CodeForm isLoading={true} error={null} dispatch={() => {}} />);

		const button = screen.getByRole('button', { name: /evaluate/i });

		expect(button).toBeInTheDocument();
		expect(button).toBeDisabled();
	});

	it('should display error', () => {
		render(<CodeForm isLoading={false} error="error" dispatch={() => {}} />);

		const errorMessage = screen.getByText('error');

		expect(errorMessage).toBeInTheDocument();
	});

	it('should call dispatch on submit', () => {
		const dispatch = vi.fn();
		render(<CodeForm isLoading={false} error={null} dispatch={dispatch} />);

		const textarea = screen.getByRole('textbox', { name: /code/i });

		fireEvent.change(textarea, { target: { value: 'a' } });

		const button = screen.getByRole('button', { name: /evaluate/i });

		fireEvent.click(button);

		expect(dispatch).toHaveBeenCalled();
	});

	it('should not call dispatch on submit when input is empty', () => {
		const dispatch = vi.fn();
		render(<CodeForm isLoading={false} error={null} dispatch={dispatch} />);

		const button = screen.getByRole('button', { name: /evaluate/i });

		fireEvent.click(button);

		expect(dispatch).not.toHaveBeenCalled();
	});
});
