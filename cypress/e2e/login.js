/// <reference types="cypress" />

import { homePage, loginFormPage, dashboard } from '../pages/index'
import { userDetails, validAuthUser, invalidAuthUser } from '../fixtures/test_data'

  describe('Validate Account Creation', function() {
    beforeEach(function()  {
      cy.visit('/')
      cy.clearCookies()
    })

    it('Validate successful account creation', function() {
      homePage.getSignInButton().click({force: true})
      loginFormPage.getCreateAccountButton().click()
      loginFormPage.createAccount(userDetails)
      loginFormPage.verifySuccessfulAccountCreation(userDetails) 
      dashboard.verifyUserName(userDetails)
    })

    it('Validate unsuccessful account creation - Already existing user', function() {
      homePage.getSignInButton().click({force: true})
      loginFormPage.getCreateAccountButton().click()
      loginFormPage.createAccount(validAuthUser)
      loginFormPage.getErrorMessage().should('include.text', 
      'There is already an account with this email address')
    })

  })

  describe('Validate Account Login', function() {
    beforeEach(function()  {
      cy.clearCookies()
      cy.clearAllLocalStorage()
      cy.clearAllSessionStorage()
      cy.visit('/')
    })

    it('Validate login with valid credentials', function() {
      homePage.getSignInButton().click({force: true})
      loginFormPage.login(validAuthUser)
      dashboard.verifyUserName(validAuthUser)
    })

    it('Validate login with invalid credentials', function() {
      homePage.getSignInButton().click({force: true})
      loginFormPage.login(invalidAuthUser)
      loginFormPage.getErrorMessage().should('include.text', 
      'The account sign-in was incorrect or your account is disabled temporarily')
    })

    it('Validate login with empty field errors - leaving email field', function() {
      const userWithoutEmail = {
        email: '',
        password: 'Tokyorty'
      }
      homePage.getSignInButton().click({force: true})
      loginFormPage.login(userWithoutEmail)
      cy.get('#email-error').should('include.text', 'This is a required field')
    })

    it('Validate login with empty field errors - leaving password field', function() {
      const userWithoutPassword = {
        email: 'v9stg560fa@example.com',
        password: ''
      }
      homePage.getSignInButton().click({force: true})
      loginFormPage.login(userWithoutPassword)
      cy.get('#pass-error').should('include.text', 'This is a required field')
    })

    it('Validate login with incompatible email field value', function() {
      const user = {
        email: 'tyruewiiw',
        password: 'Tokyorty'
      }
      homePage.getSignInButton().click({force: true})
      loginFormPage.login(user)
      cy.get('#email-error').should('include.text', 'Please enter a valid email address')
    })

  })

  describe('Validate Forgot Password', function() {
    beforeEach(function()  {
      cy.visit('/')
      homePage.getSignInButton().click({force: true})
      loginFormPage.getForgotPasswordButton().click()
    })

    it('Validate forgot password link works', function() {
      loginFormPage.verifyUserNavigatedToForgotPassword()
    })

    it('Validate unsuccessful Reset Password attempt - Incorrect email format', function() {
      loginFormPage.verifyUserNavigatedToForgotPassword()
      cy.get('#email_address').type('test')
      cy.get('.action.submit.primary').click()
      cy.get('#email_address-error').should('be.visible')
    })

    it('Validate successful Reset Password attempt', function() {
      const email = 'test@abc.com'
      cy.get('#email_address').type(email)
      cy.get('.action.submit.primary').click()
      cy.get('[data-ui-id="message-success"]').should('include.text',
      `If there is an account associated with ${email} you will receive an email with a link to reset your password.`)
    })

  })

  

