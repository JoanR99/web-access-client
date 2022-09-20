import React from 'react';
import './ResultsCard.scss';

const ResultsCard = ({
	name,
	description,
	elementCount,
	errorCount,
	successCriterion,
}) => {
	return (
		<article className="card">
			<div className="card-header">
				<h3>{name}</h3>
			</div>
			<div className="card-body">
				<div className="card-data">
					<span className="card-data-elements">
						{elementCount}{' '}
						{`${elementCount > 1 ? 'elements' : 'element'} evaluated`}
					</span>
					<span className="card-data-errors">
						{errorCount} {`${errorCount > 1 ? 'errors' : 'error'} found`}
					</span>
				</div>
				<div className="card-description">
					<h4>Description</h4>
					<p>{description}</p>
				</div>
				<div className="more-info">
					<h4>More Info</h4>
					<ul className="link-list">
						{successCriterion.map((sc, i) => {
							return (
								<li className="link-item" key={i}>
									<a href={sc.link} target="_blank">
										{sc.name}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</article>
	);
};

export default ResultsCard;
