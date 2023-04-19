import React, { useState } from 'react';
import { urlEvaluationRequest } from '../../services/evaluationRequest';
import Spinner from '../Spinner/Spinner';
import ErrorCard from '../ErrorCard/ErrorCard';
import { Button } from '..';

const UrlForm = ({ isLoading, error, dispatch }) => {
	const [url, setUrl] = useState('');

	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			dispatch({ type: 'EVALUATION_START' });

			const results = await urlEvaluationRequest(url);

			dispatch({ type: 'EVALUATION_SUCCESS', payload: results });

			navigate('/evaluation/results');
		} catch (e) {
			dispatch({ type: 'EVALUATION_FAIL', payload: e.response.data.message });
		}
	};

	return (
		<>
			<form onSubmit={submitHandler} className="form">
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
							placeholder="https://www.example.com"
							required
						/>
						{error && <ErrorCard>{error}</ErrorCard>}
					</div>
				)}

				<Button type="submit" className="btn" disabled={isLoading}>
					Evaluate
				</Button>
			</form>
		</>
	);
};

export default UrlForm;
