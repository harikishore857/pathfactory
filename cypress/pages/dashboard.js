/// <reference types="Cypress" />


export default class dashboard {

  static verifyUserName({firstName, lastName}) {
    cy.get('.panel > :nth-child(2)').should('include.text', `Welcome, ${firstName} ${lastName}`)
  }


}
