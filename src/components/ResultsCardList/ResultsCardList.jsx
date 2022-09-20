import React from 'react';
import './ResultsCardList.scss';
import { ResultsCard } from '..';

const ResultsCardList = ({ results = [] }) => {
	return (
		<div className="results-grid">
			{results.map((result, i) => {
				return <ResultsCard key={i} {...result} />;
			})}
		</div>
	);
};

export default ResultsCardList;
