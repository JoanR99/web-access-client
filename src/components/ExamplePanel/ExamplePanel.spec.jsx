import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
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
