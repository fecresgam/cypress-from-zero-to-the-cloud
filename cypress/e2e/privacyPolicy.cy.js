describe('TAT Customer Service Center', () => {

  beforeEach(() => {
    cy.visit('./src/privacy.html');
  })


it.only('L7 - independently test the privacy policy page', () => {
  cy.contains('p','We do not save data submitted in the TAT CSC application form.').should('be.visible');
  cy.contains('p','We use HTML, CSS and JavaScript technologies to simulate a real application.').should('be.visible');
  cy.contains('p','However, the application is an example, without any data persistence, and used for teaching purposes.').should('be.visible');
  cy.contains('p','Talking About Testing').should('be.visible');
});  




})
