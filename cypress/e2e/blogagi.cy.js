/// <reference types="cypress" />
import BlogPage from '../support/pageObjects/BlogPage';

describe('Test Blogdo Agi', () => {
  beforeEach(() => {
    cy.configureTestEnvironment(); // Configura o ambiente de teste antes de cada teste
    cy.loadFixtures(); // Carrega as fixtures antes de todos os testes
  });

  it('Cenário de Teste 1: Pesquisa pela palavra "investimento"', () => {
    const termoPesquisa = Cypress.env('fixtures').terms.investimento;
    BlogPage.searchForTerm(termoPesquisa);
    BlogPage.assertSearchResults();
  });

  it('Cenário de Teste 2: Verificar a Exibição de 20 Resultados', () => {
    const termoPesquisa = Cypress.env('fixtures').terms.investimento;
    BlogPage.searchForTerm(termoPesquisa);
    BlogPage.loadMoreResults();
    BlogPage.assertSearchResults2();
  });

  it('Cenário de Teste 3: Pesquisa por "Nenhum resultado"', () => {
    const termoPesquisa = Cypress.env('fixtures').terms.nenhumResultado;
    BlogPage.searchForTerm(termoPesquisa);
    BlogPage.assertNoSearchResults(termoPesquisa);
  });

  it('Cenário de Teste 4: Acesso à página de O Agibank', () => {
    BlogPage.navigateToInstitucionalPage();
    BlogPage.assertPageLoaded();
  });

  it('Cenário de Teste 5: Acesso à página de Produtos', () => {
    BlogPage.navigateToProdutosPage();
    BlogPage.assertPageLoaded();
  });

  it('Cenário de Teste 6: Acesso à página de Serviços', () => {
    BlogPage.navigateToServicosPage();
    BlogPage.assertPageLoaded();
  });

  it('Cenário de Teste 7: Acesso à página Suas Finanças', () => {
    BlogPage.navigateToSuasFinancasPage();
    BlogPage.assertPageLoaded();
  });

  it('Cenário de Teste 8: Acesso à página Suas Segurança', () => {
    BlogPage.navigateToSuasSegurancaPage();
    BlogPage.assertPageLoaded();
  });
});
