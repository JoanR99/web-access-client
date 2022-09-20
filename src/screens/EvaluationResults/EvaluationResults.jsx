import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ResultsCardList } from '../../components';
import { useResults } from '../../context/ResultsProvider';

const AccessibilityEvaluationResults = () => {
	const results = useResults();

	return (
		<div className="results-page">
			<h1 className="text-center mb-4">Results</h1>

			<h3>Elements evaluated: {results?.elementsEvaluatedCount}</h3>
			<h3>Errors found: {results?.errorsFoundCount}</h3>
			<ResultsCardList results={results?.specificResults} />

			<Link to="/evaluation" className="link">
				Go Back
			</Link>
		</div>
	);
};

export default AccessibilityEvaluationResults;
