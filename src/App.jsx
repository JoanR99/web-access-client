import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
	AccessibilityEvaluation,
	ContrastEvaluation,
	Home,
	Layout,
} from './screens';
import EvaluationResults from './screens/EvaluationResults/EvaluationResults';
import { EvaluationProvider } from './context/EvaluationContext';

function App() {
	return (
		<EvaluationProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />

						<Route path="evaluation" element={<AccessibilityEvaluation />} />
						<Route path="evaluation/results" element={<EvaluationResults />} />

						<Route path="contrast" element={<ContrastEvaluation />} />
					</Route>
				</Routes>
			</Router>
		</EvaluationProvider>
	);
}

export default App;
