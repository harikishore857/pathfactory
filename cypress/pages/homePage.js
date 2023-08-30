/// <reference types="Cypress" />


export default class homePage {

  static getSignInButton() {
    return cy.get('.panel > .header > .authorization-link > a')
  }

}
