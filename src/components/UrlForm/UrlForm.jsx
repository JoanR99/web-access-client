import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { urlEvaluationRequest } from '../../services/evaluationRequest';
import Spinner from '../Spinner/Spinner';
import { useSetResults } from '../../context/ResultsProvider';

const UrlForm = () => {
	const [url, setUrl] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	const setResults = useSetResults();

	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			setIsLoading(true);

			const results = await urlEvaluationRequest(url);

			setResults(results);

			navigate('/evaluation/results');
		} catch (e) {
			setError(e.response.data.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<form onSubmit={submitHandler} className="form">
				<h2 className="heading-2 heading-2--primary">Evaluate By URL</h2>
				{isLoading ? (
					<Spinner />
				) : (
					<div className="form-group">
						<label htmlFor="url">URL</label>
						<input
							type="url"
							name="url"
							id="url"
							value={url}
							onChange={(e) => setUrl(e.target.value)}
							placeholder="www.example.com"
						/>
					</div>
				)}

				<button type="submit" className="btn">
					Evaluate
				</button>
			</form>
		</>
	);
};

export default UrlForm;
