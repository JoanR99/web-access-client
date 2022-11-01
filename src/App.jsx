import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
	AccessibilityEvaluation,
	ContrastEvaluation,
	Home,
	Layout,
} from './screens';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="evaluation" element={<AccessibilityEvaluation />} />
					<Route path="contrast" element={<ContrastEvaluation />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
