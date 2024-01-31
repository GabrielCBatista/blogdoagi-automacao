describe('Test Blogdo Agi', () => {
  beforeEach(() => {
    cy.configureTestEnvironment(); // Configura o ambiente de teste antes de cada teste
    cy.loadFixtures(); // Carrega as fixtures antes de todos os testes
  });

  it('Cenário de Teste 1: Pesquisa pela palavra "investimento"', () => {
    const fixtures = Cypress.env('fixtures');
    const termoPesquisa = fixtures.terms.investimento;
    cy.get('#search-open').click();
    cy.get('.desktop-search > .search-form > label > .search-field').clear().type(termoPesquisa);
    cy.get('.desktop-search > .search-form > .search-submit').click();
    cy.get('.archive-title').should('exist').and('contain.text', fixtures.terms.resultadosPesquisa);
    cy.get('.archive-title').should('be.visible');
    cy.get('[id^="post-"] > .meta-main-wrap > .entry-meta > .entry-date > a').should('have.length', 10);
  });

  it('Cenário de Teste 2: Verificar a Exibição de 20 Resultados', () => {
    const fixtures = Cypress.env('fixtures');
    const termoPesquisa = fixtures.terms.investimento;
    cy.get('#search-open').click();
    cy.get('.desktop-search > .search-form > label > .search-field').clear().type(termoPesquisa);
    cy.get('.desktop-search > .search-form > .search-submit').click();
    cy.get('.archive-title').should('exist').and('contain.text', fixtures.terms.resultadosPesquisa);
    cy.get('#infinite-handle').scrollIntoView().then(() => {
      cy.get('span > button').click();
    });
    cy.get('#infinite-handle').scrollIntoView();
    cy.get('.archive-title').should('be.visible');
    cy.get('[id^="post-"] > .meta-main-wrap > .entry-meta > .entry-date > a').should('have.length', 20);
  });

  it('Cenário de Teste 3: Pesquisa por "Nenhum resultado"', () => {
    const fixtures = Cypress.env('fixtures');
    const termoPesquisa = fixtures.terms.nenhumResultado;
    cy.get('#search-open').click();
    cy.get('.desktop-search > .search-form > label > .search-field').clear().type(termoPesquisa);
    cy.get('.desktop-search > .search-form > .search-submit').click();
    cy.get('.entry-title').should('contain.text', fixtures.terms.nenhumResultado);
    cy.get('.search-field').should('have.value', termoPesquisa);
  });

  it('Cenário de Teste 4: Acesso à página de O Agibank', () => {
    cy.get('#menu-item-3713 > [href="https://blogdoagi.com.br/institucional/"]').click();
    cy.get('.archive-title').should('be.visible');
    cy.get('[id^="post-"] > .meta-main-wrap > .entry-meta > .entry-date > a').should('have.length', 10);
  });

  it('Cenário de Teste 5: Acesso à página de Produtos', () => {
    cy.get('#menu-item-3714 > [href="https://blogdoagi.com.br/produtos/"]').click();
    cy.get('.archive-title').should('be.visible');
    cy.get('[id^="post-"] > .meta-main-wrap > .entry-meta > .entry-date > a').should('have.length', 10);
  });

  it('Cenário de Teste 6: Acesso à página de Serviços', () => {
    cy.get('#menu-item-3715 > a').click();
    cy.get('.archive-title').should('be.visible');
    cy.get('[id^="post-"] > .meta-main-wrap > .entry-meta > .entry-date > a').should('have.length', 10);
  });

  it('Cenário de Teste 7: Acesso à página Suas Finanças', () => {
    cy.get('#menu-item-3717 > a').click();
    cy.get('.archive-title').should('be.visible');
    cy.get('[id^="post-"] > .meta-main-wrap > .entry-meta > .entry-date > a').should('have.length', 10);
  });

  it('Cenário de Teste 8: Acesso à página Suas Segurança', () => {
    cy.get('#menu-item-3716 > a').click();
    cy.get('.archive-title').should('be.visible');
    cy.get('[id^="post-"] > .meta-main-wrap > .entry-meta > .entry-date > a').should('have.length', 10);
  });
});
