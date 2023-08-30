/// <reference types="cypress" />

import { homePage, loginFormPage } from '../pages/index'
import { userDetails, validAuthUser, invalidAuthUser } from '../fixtures/test_data'
import dashboard from '../pages/dashboard'

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
      cy.visit('/')
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

    // it('Validate forgot password link',function(){

    // })

  })

  

