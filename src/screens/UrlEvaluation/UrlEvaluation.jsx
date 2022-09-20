import React from 'react';
import { UrlEvaluationIllustration, UrlForm } from '../../components';

const UrlEvaluation = () => (
	<div className="section">
		<div className="section__illustration">
			<UrlEvaluationIllustration />
		</div>
		<div className="section__content form-layout">
			<UrlForm />
		</div>
	</div>
);

export default UrlEvaluation;
