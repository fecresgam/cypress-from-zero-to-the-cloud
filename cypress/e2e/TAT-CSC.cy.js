import '../support/commands'

describe('TAT Customer Service Center', () => {

  beforeEach(() => {
    cy.visit('./src/index.html');
  })


  // Exercise 1
  it('L1 - checks the application title - eq', () => {
    cy.title().should('eq', 'TAT Customer Service Center');
  });

  it('L1 - checks the application title - be.equal', () => {
    cy.title().should('be.equal', 'TAT Customer Service Center');
  });

  it('L1 - checks the application title - include', () => {
    cy.title().should('include', 'TAT Customer');
  });

  //Exercise 2
  it('L2 - playing', () => {
    cy.contains('Send').click();
  });

  it('L2 - fills in the required fields and submits the form', () => {
    cy.get('#firstName').type('Nombre Propio', {delay: 0});
    cy.get('#lastName').type('Apellido1 Apellido2', {delay: 0});
    cy.get('#email').type('nombre@empresa.com', {delay: 0});
    cy.get('#phone').type('-====*34 666999999', {delay: 0});//TODO: Por que no pilla caracteres como +, =, *???
    //cy.get('.tat-service');
    // cy.get('#email-checkbox');
    cy.get('#open-text-area').type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet ullamcorper dui, eu pulvinar ante commodo vitae. Vestibulum a venenatis sem. In in lorem lobortis, porttitor tortor vitae, hendrerit lectus. Quisque facilisis, ante non sollicitudin vestibulum, ante est sagittis eros, eget mollis lectus lectus sit amet ex. Aliquam ultrices ex eget pellentesque hendrerit. Nam suscipit, felis in viverra euismod, lorem diam fermentum quam, id vulputate lectus metus at elit. Aenean maximus a magna vitae tincidunt. Sed sagittis ultrices nisi nec posuere. Donec ac egestas velit, sit amet pulvinar sem. Curabitur semper, felis nec blandit tincidunt, massa diam mattis nisl, a dignissim libero libero aliquam nisl. Sed ornare turpis eu arcu luctus pulvinar. Nam semper sollicitudin mollis.", 
      { delay: 0 });
    cy.sendAndCheckValidationSuccess();
  });

  it('L2 - displays an error message when submitting the form with an email with invalid formatting', () => {
    cy.get('#firstName').type('Nombre Propio', {delay: 0});
    cy.get('#lastName').type('Apellido1 Apellido2', {delay: 0});
    cy.get('#email').type('nombreempresa.com', {delay: 0});
    cy.get('#phone').type('-====*34 666999999', {delay: 0});
    //cy.get('.tat-service');
    // cy.get('#email-checkbox');
    cy.get('#open-text-area').type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet ullamcorper dui, eu pulvinar ante commodo vitae. Vestibulum a venenatis sem. In in lorem lobortis, porttitor tortor vitae, hendrerit lectus. Quisque facilisis, ante non sollicitudin vestibulum, ante est sagittis eros, eget mollis lectus lectus sit amet ex. Aliquam ultrices ex eget pellentesque hendrerit. Nam suscipit, felis in viverra euismod, lorem diam fermentum quam, id vulputate lectus metus at elit. Aenean maximus a magna vitae tincidunt. Sed sagittis ultrices nisi nec posuere. Donec ac egestas velit, sit amet pulvinar sem. Curabitur semper, felis nec blandit tincidunt, massa diam mattis nisl, a dignissim libero libero aliquam nisl. Sed ornare turpis eu arcu luctus pulvinar. Nam semper sollicitudin mollis.", 
      { delay: 0 });
    cy.contains('Send').click();
    cy.get('.error').should('be.visible');
  });

  it('L2 - phone only accept nunmbers', () => {
    cy.get('#phone').type('AUBUONou').should('have.value', '');
  });

 it('L2 - displays an error message when the phone becomes required but is not filled in before the form submission', () => {
    cy.get('#firstName').type('Nombre Propio', {delay: 0});
    cy.get('#lastName').type('Apellido1 Apellido2', {delay: 0});
    cy.get('#email').type('nombre@empresa.com', {delay: 0});
    //cy.get('.tat-service');
    // cy.get('#email-checkbox');
     cy.get('#phone-checkbox').check();
    cy.get('#open-text-area').type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet ullamcorper dui, eu pulvinar ante commodo vitae. Vestibulum a venenatis sem. In in lorem lobortis, porttitor tortor vitae, hendrerit lectus. Quisque facilisis, ante non sollicitudin vestibulum, ante est sagittis eros, eget mollis lectus lectus sit amet ex. Aliquam ultrices ex eget pellentesque hendrerit. Nam suscipit, felis in viverra euismod, lorem diam fermentum quam, id vulputate lectus metus at elit. Aenean maximus a magna vitae tincidunt. Sed sagittis ultrices nisi nec posuere. Donec ac egestas velit, sit amet pulvinar sem. Curabitur semper, felis nec blandit tincidunt, massa diam mattis nisl, a dignissim libero libero aliquam nisl. Sed ornare turpis eu arcu luctus pulvinar. Nam semper sollicitudin mollis.", 
      { delay: 0 });
    cy.contains('Send').click();
    cy.get('.error').should('be.visible');
  });

  it('L2 - fills and clears the first name, last name, email, and phone fields', () => {
    cy.get('#firstName')
      .type('Nombre Propio')
      .should('have.value','Nombre Propio')
      .clear()
      .should('have.value','');
    cy.get('#lastName')
      .type('Apellido1 Apellido2')
      .should('have.value','Apellido1 Apellido2')
      .clear()
      .should('have.value','');
    cy.get('#email')
      .type('nombre@empresa.com')
      .should('have.value','nombre@empresa.com')
      .clear()
      .should('have.value','');
    cy.get('#phone')
      .type('9342723984723')
      .should('have.value','9342723984723')
      .clear()
      .should('have.value','');
  });


  it('L2 - displays an error message when submitting the form without filling the required fields', () => {
    cy.contains('Send').click();
    cy.get('.error').should('be.visible');
  });

  it('L2 - uso extendido de contains', () => {
    cy.contains('button','Send').click();
    cy.get('.error').should('be.visible');
  });

  it('L2 - uso de commands', () => {
    cy.sendAndCheckValidationError();
  });

  //Lesson 3
  it('L3 - selects a product (YouTube)', () => {
    cy.get('#product').select('youtube').should('have.value','youtube');
  });

  it('L3 - selects a product (2)', () => {
    cy.get('#product').select(2).should('have.value','courses');
  });

  //Lesson 4 - Radio Buttons
  it('L4 - checks the type of service "Feedback"', () => {
    cy.get('input[type="radio"][name="tat-service"][value=help]').check().should('be.checked');
    cy.get('input[type="radio"][name="tat-service"][value=praise]').check().should('be.checked');
    cy.get('input[type="radio"][name="tat-service"][value=feedback]').check().should('be.checked');
  });  

  //Lesson 5 - Checkboxes
  it('L5 - checks both checkboxes, then unchecks the last one - mi estilo', () => {
    cy.get('#email-checkbox').check().should('be.checked');
    cy.get('#phone-checkbox').check().should('be.checked');
    cy.get('#phone-checkbox').uncheck().should('be.not.checked');
  });  

  it('L5 - checks both checkboxes, then unchecks the last one - estilo Walmir', () => {
    cy.get('input[type="checkbox"')
    .check()
    .should('be.checked')
    .last()
    .uncheck()
    .should('be.not.checked');
  });  
  
  it('L5 - checks both checkboxes, then unchecks the last one - jugando', () => {
    cy.get('input[type="checkbox"')
      .as('misChecks');
    cy.get('@misChecks')
      .check();
    
    cy.get('@misChecks')
      .should('be.checked');
  });  
  
//Lesson 6
it('L6 - selects a file from the fixtures folder', () => {
  cy.get('#file-upload')
    .selectFile('./cypress/fixtures/example.json')
    .should(input => {
      //console.log(input);
      expect(input[0].files[0].name).to.equal('example.json');
    });
});  

it('L6 - selects a file from the fixtures folder - dragndrop', () => {
  cy.get('#file-upload')
    .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
    .should(input => {
      //console.log(input);
      expect(input[0].files[0].name).to.equal('example.json');
    });
});  


it.only('L6 - selects a file from the fixtures folder - fixture alias', () => {
  cy.fixture("example.json").as('miFile');
  cy.get('#file-upload')
    .selectFile('@miFile')
    .should(input => {
      //console.log(input);
      expect(input[0].files[0].name).to.equal('example.json');
    });
});  
})
