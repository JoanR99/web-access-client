import React from 'react';
import { ResultsCardList } from '..';

const EvaluationResults = ({ results, reset }) => {
	return (
		<div className="results-page">
			<h1 className="text-center mb-4">Results</h1>

			<h3>Elements evaluated: {results?.elementsEvaluatedCount}</h3>
			<h3>Errors found: {results?.errorsFoundCount}</h3>
			<ResultsCardList results={results?.specificResults} />

			<button onClick={reset} className="btn">
				Go Back
			</button>
		</div>
	);
};

export default EvaluationResults;
