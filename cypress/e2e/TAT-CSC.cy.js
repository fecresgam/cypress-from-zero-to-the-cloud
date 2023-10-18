describe('TAT Customer Service Center', () => {
  it('checks the application title - eq', () => {
    cy.visit('./src/index.html');
    cy.title().should('eq', 'TAT Customer Service Center');
  });

  it('checks the application title - be.equal', () => {
    cy.visit('./src/index.html');
    cy.title().should('be.equal', 'TAT Customer Service Center');
  });
  it('checks the application title - include', () => {
    cy.visit('./src/index.html');
    cy.title().should('include', 'TAT Customer');
  });

})
