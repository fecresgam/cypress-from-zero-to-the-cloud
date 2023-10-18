describe('TAT Customer Service Center', () => {

  beforeEach(() => {
    cy.visit('./src/index.html');
  })


  // Exercise 1
  it('E1 - checks the application title - eq', () => {
    cy.title().should('eq', 'TAT Customer Service Center');
  });

  it('E1 - checks the application title - be.equal', () => {
    cy.title().should('be.equal', 'TAT Customer Service Center');
  });
  it('E1 - checks the application title - include', () => {
    cy.title().should('include', 'TAT Customer');
  });

  //Exercise 2
  // it('E2 - playing', () => {
  //   cy.contains('Send').click();
  // });

  it('E2 - fills in the required fields and submits the form', () => {
    cy.get('#firstName').type('Nombre Propio');
    cy.get('#lastName').type('Apellido1 Apellido2');
    cy.get('#email').type('nombre@empresa.com');
    cy.get('#phone').type('-====*34 666999999');//TODO: Por que no pilla caracteres como +, =, *???
    //cy.get('.tat-service');
    // cy.get('#email-checkbox');
    cy.get('#open-text-area').type("Y aqui meto la parrafada");
    cy.contains('Send').click();

    cy.get('.success').should('be.visible');
  });
})
