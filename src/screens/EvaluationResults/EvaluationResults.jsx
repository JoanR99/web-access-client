import React from 'react';
import { Button, ResultsCardList } from '../../components';
import './EvaluationResults.scss';
import { useEvaluation, useDispatch } from '../../context/EvaluationContext';
import { useNavigate } from 'react-router-dom';

const EvaluationResults = () => {
	const { results } = useEvaluation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const reset = () => {
		dispatch({ type: 'RESET' });
		navigate('/evaluation');
	};

	return (
		<div className="results-page">
			<h1 className="text-center mb-4">Results</h1>

			<h3>Elements evaluated: {results?.elements_evaluated_count}</h3>
			<h3>Errors found: {results?.errors_found_count}</h3>
			<ResultsCardList results={results?.results_details} />

			<Button onClick={reset} className="btn">
				Go Back
			</Button>
		</div>
	);
};

export default EvaluationResults;
