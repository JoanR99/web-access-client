import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEvaluationApi } from '../context/evaluation/EvaluationContext';

const useEvaluationFlow = (isSuccess, isError) => {
	const navigate = useNavigate();
	const { resetError } = useEvaluationApi();

	console.log('effect');

	useEffect(() => {
		if (isSuccess) {
			navigate('/evaluation/results');
		}
	}, [isSuccess]);

	useEffect(() => {
		return () => {
			if (isError) {
				resetError();
			}
		};
	}, [isError]);
};

export default useEvaluationFlow;
