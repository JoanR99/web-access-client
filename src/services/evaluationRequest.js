import axios from 'axios';

const BASE_URL = import.meta.env.VITE_SERVER_URL ?? '/api';

const apiInstance = axios.create({
	baseURL: BASE_URL,
});

export const urlEvaluationRequest = async (url) => {
	const { data } = await apiInstance.post('/evaluation/url', {
		url,
	});

	return data;
};

export const codeEvaluationRequest = async (code) => {
	const { data } = await apiInstance.post('/evaluation/code', {
		code,
	});

	return data;
};
