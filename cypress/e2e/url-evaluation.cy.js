describe('template spec', () => {
	it('passes', () => {
		cy.visit('/');

		cy.log('Opening the evaluation page');
		cy.findByRole('link', { name: /evaluation/i }).click();

		cy.log('Evaluation page');
		cy.findByRole('heading', { name: /Evaluate Accessibility/i }).should(
			'be.visible'
		);

		cy.log('Prepare evaluation');
		cy.findByPlaceholderText('https://www.example.com')
			.should('be.visible')
			.click()
			.type('https://www.google.com');
		cy.findByRole('button', { name: /evaluate/i })
			.should('be.visible')
			.click();

		cy.log('Results page');
		cy.findByRole('heading', { name: /elements evaluated/i }).should(
			'be.visible'
		);
		cy.findByRole('heading', { name: /errors found/i }).should('be.visible');
		cy.findAllByRole('article').should('have.length', 1);
		cy.findAllByRole('article').should('be.visible');
	});
});
