/// <reference types="Cypress" />


export default class loginFormPage {

  static createAccount({firstName, lastName, email, password}) {
    cy.get('#firstname').type(firstName)
    cy.get('#lastname').type(lastName)
    cy.get('#email_address').type(email)
    cy.get('#password').type(password)
    cy.get('#password-confirmation').type(password)
    cy.get('.action.submit.primary').click()
  }

  static getCreateAccountButton() {
    return cy.get('.action.create.primary')
  }

  static submitForm() {
    return cy.get('.action.submit.primary')
  }

  static getErrorMessage() {
    return cy.get('.message-error')
  }

  static verifySuccessfulAccountCreation({email}){
    cy.get('.message-success').should('be.visible')
    cy.get('.box-content > p').should('include.text', email)
  }

  static login({email, password}) {
    if(email) cy.get('#email').type(email)
    if(password) cy.get('#pass').type(password)
    cy.get('.action.login.primary').click({force: true})
  }

  static forgotPassword(){
    cy.get('.action.remind').click({force: true})
    if(email) cy.get('#email_address').type(email)
  }

  static getForgotPasswordButton() {
    return cy.get('.action.remind')
  }

  static verifyUserNavigatedToForgotPassword() {
    cy.url().should('include', '/customer/account/forgotpassword/')
    cy.contains('Forgot Your Password?').should('be.visible')
  }

}
