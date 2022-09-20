import axios from 'axios';

export const urlEvaluationRequest = async (url) => {
	const { data } = await axios.post(
		'https://web-access-server.onrender.com/api/evaluate/url',
		{
			url,
		}
	);

	return data;
};

export const codeEvaluationRequest = async (code) => {
	const { data } = await axios.post(
		'https://web-access-server.onrender.com/api/evaluate/code',
		{
			code,
		}
	);

	return data;
};
