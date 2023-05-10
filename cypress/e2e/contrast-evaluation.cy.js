import rgbHex from 'rgb-hex';
const RED = 'ff0000';
const GREEN = '008000';
const WHITE = 'ffffff';
const BLUE = '1a8fe3';

describe('contrast checker', () => {
	it('should change example panel colors and show status', () => {
		cy.visit('/');

		cy.log('Opening the contrast page');
		cy.findByText('Contrast').click();

		cy.log('Contrast page');
		cy.findByRole('region')
			.should('be.visible')
			.invoke('css', 'color')
			.then((color) => {
				expect(rgbHex(color)).to.be.equal(WHITE);
			});
		cy.findByRole('region')
			.should('be.visible')
			.invoke('css', 'background-color')
			.then((bgColor) => {
				expect(rgbHex(bgColor)).to.be.equal(BLUE);
			});

		cy.findByText((content) => content.includes('Meets the level'))
			.should('be.visible')
			.invoke('css', 'color')
			.then((bgColor) => {
				expect(rgbHex(bgColor)).to.be.equal(GREEN);
			});

		cy.log('Change text color');
		cy.findByLabelText(/text color/i).then((input) => {
			cy.controlledInputChange(input, `#${BLUE}`);
		});
		cy.findByRole('region')
			.should('be.visible')
			.invoke('css', 'color')
			.then((color) => {
				expect(rgbHex(color)).to.be.equal(BLUE);
			});
		cy.findByText((content) =>
			content.includes('It does not meet the minimum level')
		)
			.should('be.visible')
			.invoke('css', 'color')
			.then((bgColor) => {
				expect(rgbHex(bgColor)).to.be.equal(RED);
			});

		cy.log('change background color');
		cy.findByLabelText(/background color/i).then((input) => {
			cy.controlledInputChange(input, `#${WHITE}`);
		});
		cy.findByRole('region')
			.should('be.visible')
			.invoke('css', 'background-color')
			.then((color) => {
				expect(rgbHex(color)).to.be.equal(WHITE);
			});
		cy.findByText((content) => content.includes('Meets the level'))
			.should('be.visible')
			.invoke('css', 'color')
			.then((bgColor) => {
				expect(rgbHex(bgColor)).to.be.equal(GREEN);
			});
	});
});
