describe('code evaluation', () => {
	it('should show evaluation results', () => {
		cy.visit('/');

		cy.log('Opening the evaluation page');
		cy.findByRole('link', { name: /evaluation/i }).click();

		cy.log('Evaluation page');
		cy.findByRole('heading', { name: /Evaluate Accessibility/i }).should(
			'be.visible'
		);

		cy.log('Prepare evaluation');
		cy.findAllByRole('tab', { name: 'Code' }).should('be.visible').click();
		cy.findByRole('textbox').should('be.visible').click().type('<html></html>');
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

	it('should show error when textarea is empty', () => {
		cy.visit('/');

		cy.log('Opening the evaluation page');
		cy.findByRole('link', { name: /evaluation/i }).click();

		cy.log('Evaluation page');
		cy.findByRole('heading', { name: /Evaluate Accessibility/i }).should(
			'be.visible'
		);

		cy.findAllByRole('tab', { name: 'Code' }).should('be.visible').click();
		cy.findByRole('button', { name: /evaluate/i })
			.should('be.visible')
			.click();
		cy.findByRole('textbox')
			.should('be.visible')
			.invoke('prop', 'validationMessage')
			.should((text) => {
				expect(text).to.contain('Please fill');
			});
	});
});
