class BlogElements {
    static get searchOpenButton() { return cy.get('#search-open'); }
    static get searchField() { return cy.get('.desktop-search > .search-form > label > .search-field'); }
    static get searchSubmitButton() { return cy.get('.desktop-search > .search-form > .search-submit'); }
    static get archiveTitle() { return cy.get('.archive-title'); }
    static get postDates() { return cy.get('[id^="post-"] > .meta-main-wrap > .entry-meta > .entry-date > a'); }
    static get infiniteHandle() { return cy.get('#infinite-handle'); }
    static get loadMoreButton() { return cy.get('span > button'); }
    static get noResultTitle() { return cy.get('.entry-title'); }
    static get searchInputField() { return cy.get('.search-field'); }
    static get institucionalPageLink() { return cy.get('#menu-item-3713 > [href="https://blogdoagi.com.br/institucional/"]'); }
    static get produtosPageLink() { return cy.get('#menu-item-3714 > [href="https://blogdoagi.com.br/produtos/"]'); }
    static get servicosPageLink() { return cy.get('#menu-item-3715 > a'); }
    static get suasFinancasPageLink() { return cy.get('#menu-item-3717 > a'); }
    static get suasSegurancaPageLink() { return cy.get('#menu-item-3716 > a'); }
    static get clicarpostantigos() { return cy.get('span > button'); }
  }
  
  export default BlogElements;
  