Cypress.Commands.add("loadFixtures", () => {
    cy.fixture('fixtures.json').then((fixtures) => {
      Cypress.env('fixtures', fixtures);
    });
  });
  
  Cypress.Commands.add("configureTestEnvironment", () => {
    cy.viewport(1280, 720);
    cy.visit('https://blogdoagi.com.br/');
    cy.get('.custom-logo').should('exist');
  });
  