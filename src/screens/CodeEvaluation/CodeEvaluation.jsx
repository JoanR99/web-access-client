import React from 'react';
import { CodeEvaluationIllustration, CodeForm } from '../../components';

const CodeEvaluation = () => (
	<div className="section">
		<div className="section__illustration">
			<CodeEvaluationIllustration />
		</div>
		<div className="section__content form-layout">
			<CodeForm />
		</div>
	</div>
);

export default CodeEvaluation;
