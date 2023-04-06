/// <reference types="cypress" />

import { homePage } from '../pages/index'

  describe('Validate Search', function() {
    beforeEach(function()  {
      cy.intercept('POST', '**/admin-ajax.php').as('search')
      cy.visit('/')
    })

    it('Validate search functionality - provide a search term', function() {
      homePage.search('Supplier')
      cy.wait('@search').its('response.statusCode').should('eq', 200)
      homePage.verifySearchResults('Supplier')
    })

  })

  

