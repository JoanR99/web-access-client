import React from 'react';
import { CodeEvaluationIllustration, CodeForm } from '../../components';
import EvaluationResults from '../../components/EvaluationResults/EvaluationResults';
import EvaluationTabs from '../../components/EvaluationTabs/EvaluationTabs';
import { useEvaluationReducer } from '../../hooks/useEvaluationReducer';

const AccessibilityEvaluation = () => {
	const [{ isLoading, error, results }, dispatch] = useEvaluationReducer();

	const reset = () => dispatch({ type: 'RESET' });

	return !results ? (
		<div className="section">
			<div className="section__illustration">
				<CodeEvaluationIllustration />
			</div>
			<div className="section__content">
				<h2 className="heading-2 heading-2--primary mb-2">
					Evaluate Accessibility
				</h2>
				<EvaluationTabs
					isLoading={isLoading}
					error={error}
					dispatch={dispatch}
				/>
			</div>
		</div>
	) : (
		<EvaluationResults results={results} reset={reset} />
	);
};

export default AccessibilityEvaluation;
