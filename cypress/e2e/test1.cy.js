/// <reference types="cypress"/>
it('Google Search', () =>{
    cy.visit('https://google.com')

    cy.get('#APjFqb').type('Hello,world')

    cy.contains('Google Search').click()

    cy.contains('Images').click()

    cy.contains('Maps').click()
    cy.contains('Reviews').click()
   
})