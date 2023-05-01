import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatusPanel from './StatusPanel';
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

describe('Status Panel component', () => {
	it('should render status', () => {
		render(
			<TestProvider
				initialValues={[
					[textColorAtom, '#ffffff'],
					[backgroundColorAtom, '#000000'],
				]}
			>
				<StatusPanel />
			</TestProvider>
		);

		const status = screen.getByText('Contrast ratio:');
		expect(status).toBeInTheDocument();
	});

	it('should print status with color green on correct contrast', () => {
		render(
			<TestProvider
				initialValues={[
					[textColorAtom, '#ffffff'],
					[backgroundColorAtom, '#000000'],
				]}
			>
				<StatusPanel />
			</TestProvider>
		);
		const status = screen.getByText('21:1 Meets the level AAA of WCAG.');
		expect(status).toBeInTheDocument();
		expect(status).toHaveStyle('color: green;');
	});

	it('should print status with color red on bad contrast', () => {
		render(
			<TestProvider
				initialValues={[
					[textColorAtom, '#100000'],
					[backgroundColorAtom, '#000000'],
				]}
			>
				<StatusPanel />
			</TestProvider>
		);
		const status = screen.getByText(
			'1.02:1 It does not meet the minimum level of WCAG.'
		);
		expect(status).toBeInTheDocument();
		expect(status).toHaveStyle('color: red;');
	});
});
