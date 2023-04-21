import { createContext, useContext } from 'react';
import { useEvaluationReducer } from '../hooks/useEvaluationReducer';

export const EvaluationContext = createContext({
	isLoading: false,
	error: null,
	results: null,
});

export const DispatchContext = createContext(() => {});

export const EvaluationProvider = ({ children }) => {
	const [state, dispatch] = useEvaluationReducer();

	return (
		<EvaluationContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				{children}
			</DispatchContext.Provider>
		</EvaluationContext.Provider>
	);
};

export const useEvaluation = () => useContext(EvaluationContext);
export const useDispatch = () => useContext(DispatchContext);
