import React from 'react';
import { Outlet } from 'react-router-dom';
import { ResultsProvider } from '../../context/ResultsProvider';

const AccessibilityEvaluation = () => (
	<ResultsProvider>
		<>
			<Outlet />
		</>
	</ResultsProvider>
);

export default AccessibilityEvaluation;
