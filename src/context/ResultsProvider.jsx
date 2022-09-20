import { useState, createContext, useContext } from 'react';

const ResultsApiContext = createContext();
const ResultsStoreContext = createContext();

export const ResultsProvider = ({ children }) => {
	const [results, setResults] = useState(null);

	return (
		<>
			<ResultsApiContext.Provider value={setResults}>
				<ResultsStoreContext.Provider value={results}>
					{children}
				</ResultsStoreContext.Provider>
			</ResultsApiContext.Provider>
		</>
	);
};

export const useSetResults = () => useContext(ResultsApiContext);
export const useResults = () => useContext(ResultsStoreContext);
