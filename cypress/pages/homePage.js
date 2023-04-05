/// <reference types="Cypress" />

const SEARCH = '.menu-tools > ul > li > a'
const SEARCH_FIELD = '[type="search"]'
const GET_STARTED = '[aria-label="Get Started"]'


export default class homePage {

  static getContactUsForm() {
    cy.get(GET_STARTED).click()
    cy.get('h3').contains('Contact Us').should('be.visible')
  }

  static search(searchTerm) {
    cy.get(SEARCH).eq(0).click({force: true})
    cy.get(SEARCH_FIELD).type(searchTerm).type('{enter}')
  }

  static verifySearchResults(searchTerm) {
    cy.get('.search-results').within(() => {
      cy.get('.search-item.more-results-true').each((item) => {
        expect(Cypress.$(item).text()).to.include(searchTerm);
      })
    })
  }

}
