/// <reference types="cypress" />

import { homePage, contactForm } from '../pages/index'
import { userDetails } from '../fixtures/test_data'

  describe('Validate Contact Us Form', function() {
    beforeEach(function()  {
      cy.visit('/')
    })

    it('Validate successful submission of contact form - Fill in all required fields', function() {
      homePage.getContactUsForm()
      contactForm.fillForm(userDetails)
      contactForm.submitForm()
      contactForm.validateFormSubmission()
    })

    it('Validate successful submission of contact form - Fill in all required fields with Desired use case', function() {
      homePage.getContactUsForm()
      contactForm.fillForm(userDetails)
      contactForm.selectDesiredUseCase('Compliance + Risk Reduction')
      contactForm.submitForm()
      contactForm.validateFormSubmission()
    })

    it('Validate unsuccessful submission of contact form - Incorrect email', function() {
      userDetails.email = 'rt.com'
      homePage.getContactUsForm()
      contactForm.fillForm(userDetails)
      cy.get('.hs-error-msg').should('be.visible')
    })

    it('Validate unsuccessful submission of contact form - Leave required fields empty', function() {
      homePage.getContactUsForm()
      contactForm.submitForm()
      contactForm.validateRequiredFieldError()
    })
  })

  

