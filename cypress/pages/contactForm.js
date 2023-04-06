/// <reference types="Cypress" />

const EMAIL = '#email-58999c50-a042-4baf-a822-2ec197817665'
const FIRST_NAME = '#firstname-58999c50-a042-4baf-a822-2ec197817665'
const LAST_NAME = '#lastname-58999c50-a042-4baf-a822-2ec197817665'
const POSITION = '#jobtitle-58999c50-a042-4baf-a822-2ec197817665'
const PHONE = '#phone-58999c50-a042-4baf-a822-2ec197817665'
const COMPANY = '#company-58999c50-a042-4baf-a822-2ec197817665'
const GET_STARTED_BUTTON = '.hs-button'
const SUBMISSION_MESSAGE = 'h2 > span'
const ERROR= '.hs-error-msg'
const SENIORITY= '#seniority-58999c50-a042-4baf-a822-2ec197817665'
const CITY= 'input[name="0-2/city"]'
const COUNTRY= 'input[name="0-2/country"]'
const INDUSTRY= '#industry-58999c50-a042-4baf-a822-2ec197817665'
const FAX= '#fax-58999c50-a042-4baf-a822-2ec197817665'


export default class contactForm {

  static fillForm({email, firstName, seniority, city, country, lastName, position, phone, company}) {
    cy.get(EMAIL).type(email)
    cy.get(FIRST_NAME).type(firstName)
    cy.get(SENIORITY).type(seniority)
    cy.get(CITY).type(city)
    cy.get(COUNTRY).type(country)
    cy.get(LAST_NAME).type(lastName)
    cy.get(POSITION).type(position)
    cy.get(PHONE).type(phone)
    cy.get(COMPANY).clear().type(company)
  }

  static submitForm() {
    cy.get(GET_STARTED_BUTTON).click()
  }

  static validateRequiredFieldError() {
    for(let i = 0; i < 6 ; i ++) {
      cy.get(ERROR).eq(i).should('have.text', 'Please complete this required field.')
      cy.get('.hs_error_rollup > .no-list > li > .hs-main-font-element').should('be.visible')
    }
  }

  static validateFormSubmission() {
    cy.get(SUBMISSION_MESSAGE).should('be.visible')
    cy.get('h3 > span').should('include.text', 'You\'re one step closer to unleashing procurement possibilities.')
  }

  static selectDesiredUseCase(useCase) {
    cy.get(`input[value="${useCase}"]`).click({force: true})
  }

}
