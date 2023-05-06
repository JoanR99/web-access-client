import { rest } from 'msw';

export const handlers = [
	rest.post('/api/evaluation/url', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				elements_evaluated_count: 1,
				errors_found_count: 1,
				results_details: [
					{
						test_name: 'H25',
						element_count: 1,
						error_count: 1,
					},
				],
			})
		);
	}),
];
