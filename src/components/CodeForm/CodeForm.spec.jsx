import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import CodeForm from './CodeForm';
import {
	DispatchContext,
	EvaluationContext,
} from '../../context/EvaluationContext';
import { MemoryRouter } from 'react-router-dom';

const customRender = (child, { dispatch, state, ...renderOptions }) => {
	return render(
		<EvaluationContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				{child}
			</DispatchContext.Provider>
		</EvaluationContext.Provider>,
		renderOptions
	);
};

describe('Code form', () => {
	it('should render form', () => {
		customRender(<CodeForm />, {
			dispatch: () => {},
			state: { isLoading: false, error: null, results: null },
			wrapper: MemoryRouter,
		});

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
		customRender(<CodeForm />, {
			dispatch: () => {},
			state: { isLoading: true, error: null, results: null },
			wrapper: MemoryRouter,
		});

		const button = screen.getByRole('button', { name: /evaluate/i });

		expect(button).toBeInTheDocument();
		expect(button).toBeDisabled();
	});

	it('should display error', () => {
		customRender(<CodeForm />, {
			dispatch: () => {},
			state: { isLoading: false, error: 'error', results: null },
			wrapper: MemoryRouter,
		});

		const errorMessage = screen.getByText('error');

		expect(errorMessage).toBeInTheDocument();
	});

	it('should call dispatch on submit', () => {
		const dispatch = vi.fn();
		customRender(<CodeForm />, {
			dispatch,
			state: { isLoading: false, error: null, results: null },
			wrapper: MemoryRouter,
		});

		const textarea = screen.getByRole('textbox', { name: /code/i });

		fireEvent.change(textarea, { target: { value: 'a' } });

		const button = screen.getByRole('button', { name: /evaluate/i });

		fireEvent.click(button);

		expect(dispatch).toHaveBeenCalled();
	});

	it('should not call dispatch on submit when input is empty', () => {
		const dispatch = vi.fn();
		customRender(<CodeForm />, {
			dispatch,
			state: { isLoading: false, error: null, results: null },
			wrapper: MemoryRouter,
		});

		const button = screen.getByRole('button', { name: /evaluate/i });

		fireEvent.click(button);

		expect(dispatch).not.toHaveBeenCalled();
	});
});
