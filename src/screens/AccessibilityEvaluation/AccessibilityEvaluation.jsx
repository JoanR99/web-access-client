import React from 'react';
import { CodeEvaluationIllustration, CodeForm } from '../../components';
import EvaluationTabs from '../../components/EvaluationTabs/EvaluationTabs';

const AccessibilityEvaluation = () => {
	return (
		<div className="section">
			<div className="section__illustration">
				<CodeEvaluationIllustration />
			</div>
			<div className="section__content">
				<h2 className="heading-2 heading-2--primary mb-2">
					Evaluate Accessibility
				</h2>
				<EvaluationTabs />
			</div>
		</div>
	);
};

export default AccessibilityEvaluation;
