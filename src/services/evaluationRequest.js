import axios from 'axios';

export const urlEvaluationRequest = async (url) => {
	const { data } = await axios.post(
		'https://web-access-server.onrender.com/api/evaluate/url',
		{
			url,
		},
		{
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		}
	);

	return data;
};

export const codeEvaluationRequest = async (code) => {
	const { data } = await axios.post(
		'https://web-access-server.onrender.com/api/evaluate/code',
		{
			code,
		},
		{
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		}
	);

	return data;
};
