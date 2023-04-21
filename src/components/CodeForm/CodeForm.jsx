import React, { useState } from 'react';
import { codeEvaluationRequest } from '../../services/evaluationRequest';
import Spinner from '../Spinner/Spinner';
import ErrorCard from '../ErrorCard/ErrorCard';
import { Button } from '../';
import { useDispatch, useEvaluation } from '../../context/EvaluationContext';
import { useNavigate } from 'react-router-dom';

const CodeForm = () => {
	const { isLoading, error } = useEvaluation();
	const dispatch = useDispatch();
	const [code, setCode] = useState('');
	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			dispatch({ type: 'EVALUATION_START' });

			const results = await codeEvaluationRequest(code);

			dispatch({ type: 'EVALUATION_SUCCESS', payload: results });

			navigate('/evaluation/results');
		} catch (e) {
			dispatch({ type: 'EVALUATION_FAIL', payload: e.response.data.message });
		}
	};

	return (
		<>
			<form onSubmit={submitHandler} className="form" aria-label="form">
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
							required
						></textarea>
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

export default CodeForm;
