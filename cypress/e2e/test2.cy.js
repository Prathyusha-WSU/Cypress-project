///<reference types="cypress"/>
it('Google Search',()=>{
    cy.visit('https://yahoo.com')
    cy.get('._yb_4nxn8e').click()
    cy.get('#login-username').type('prathyushavanamoju@yahoo.com')
    cy.get('#login-signin').click()
})