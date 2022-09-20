import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { codeEvaluationRequest } from '../../services/evaluationRequest';
import Spinner from '../Spinner/Spinner';
import { useSetResults } from '../../context/ResultsProvider';

const CodeForm = () => {
	const [code, setCode] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	const setResults = useSetResults();

	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			setIsLoading(true);

			const results = await codeEvaluationRequest(code);

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
				<h2 className="heading-2 heading-2--primary">Evaluate By Code</h2>
				{isLoading ? (
					<Spinner />
				) : (
					<div className="form-group">
						<label htmlFor="code">Code</label>
						<textarea
							rows={5}
							name="code"
							id="code"
							value={code}
							onChange={(e) => setCode(e.target.value)}
							placeholder="<html> </html>"
						></textarea>
					</div>
				)}

				<button type="submit" className="btn">
					Evaluate
				</button>
			</form>
		</>
	);
};

export default CodeForm;
