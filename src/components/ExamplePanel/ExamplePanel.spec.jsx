import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import ExamplePanel from './ExamplePanel';
import { useHydrateAtoms } from 'jotai/utils';
import { Provider } from 'jotai';
import { textColorAtom, backgroundColorAtom } from '../../atoms';

const HydrateAtoms = ({ initialValues, children }) => {
	useHydrateAtoms(initialValues);
	return children;
};

const TestProvider = ({ initialValues, children }) => (
	<Provider>
		<HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
	</Provider>
);

const hexToRgb = (color) => {
	color = color.slice(1);

	const r = parseInt(color.slice(0, 2), 16);
	const g = parseInt(color.slice(2, 4), 16);
	const b = parseInt(color.slice(4, 6), 16);
	return `rgb(${r}, ${g}, ${b})`;
};

describe('Example Panel component', () => {
	beforeEach(() => {
		render(
			<TestProvider
				initialValues={[
					[textColorAtom, '#ffffff'],
					[backgroundColorAtom, '#000000'],
				]}
			>
				<ExamplePanel />
			</TestProvider>
		);
	});

	it('should render panel with title and description and correct color', () => {
		const title = screen.getByText('Contrast Evaluator');
		expect(title).toBeInTheDocument();
		expect(title).toHaveStyle(`background-color: '#000000'; color: '#ffffff'`);

		const description = screen.getByText(/Change the text and background/i);
		expect(description).toBeInTheDocument();
		expect(description).toHaveStyle(
			`background-color: '#000000'; color: '#ffffff'`
		);
	});
});
