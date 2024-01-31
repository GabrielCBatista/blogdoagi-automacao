import BlogElements from '../elements/BlogElements';

class BlogPage {
  static searchForTerm(term) {
    BlogElements.searchOpenButton.click();
    BlogElements.searchField.clear().type(term);
    BlogElements.searchSubmitButton.click();
  }

  static loadMoreResults() {
    BlogElements.infiniteHandle.scrollIntoView();
    BlogElements.loadMoreButton.click();
    BlogElements.infiniteHandle.scrollIntoView();
  }

  static assertSearchResults() {
    BlogElements.archiveTitle.should('exist').and('contain.text', Cypress.env('fixtures').terms.resultadosPesquisa);
    BlogElements.archiveTitle.should('be.visible');
    BlogElements.postDates.should('have.length', 10);
  }
  static assertSearchResults2() {
    BlogElements.archiveTitle.should('exist').and('contain.text', Cypress.env('fixtures').terms.resultadosPesquisa);
    BlogElements.archiveTitle.should('be.visible');
    BlogElements.postDates.should('have.length', 20);
  }

  static assertNoSearchResults(term) {
    BlogElements.noResultTitle.should('contain.text', term);
    BlogElements.searchInputField.should('have.value', term);
  }

  static navigateToInstitucionalPage() {
    BlogElements.institucionalPageLink.click();
  }

  static navigateToProdutosPage() {
    BlogElements.produtosPageLink.click();
  }

  static navigateToServicosPage() {
    BlogElements.servicosPageLink.click();
  }

  static navigateToSuasFinancasPage() {
    BlogElements.suasFinancasPageLink.click();
  }

  static navigateToSuasSegurancaPage() {
    BlogElements.suasSegurancaPageLink.click();
  }

  static assertPageLoaded() {
    BlogElements.archiveTitle.should('be.visible');
    BlogElements.postDates.should('have.length', 10);
  }
}

export default BlogPage;
