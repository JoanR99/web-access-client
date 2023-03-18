import React from 'react';
import './ResultsCardList.scss';
import { ResultsCard } from '..';
import failTestData from '../../failTestData';

const ResultsCardList = ({ results = [] }) => {
	return (
		<div className="results-grid">
			{results.map((result) => {
				return (
					<ResultsCard
						key={result.test_name}
						{...result}
						{...failTestData[result.test_name]}
					/>
				);
			})}
		</div>
	);
};

export default ResultsCardList;
