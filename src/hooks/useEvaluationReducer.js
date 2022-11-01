import { useReducer } from 'react';

const initialState = {
	isLoading: false,
	error: null,
	results: null,
};

const evaluationReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'EVALUATION_START':
			return { ...state, isLoading: true };

		case 'EVALUATION_SUCCESS':
			return { ...state, isLoading: false, results: action.payload };

		case 'EVALUATION_FAIL':
			return { ...state, isLoading: false, error: action.payload };

		case 'RESET':
			return initialState;

		default:
			return state;
	}
};

export const useEvaluationReducer = () =>
	useReducer(evaluationReducer, initialState);
