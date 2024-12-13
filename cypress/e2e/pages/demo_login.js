export class Demopage{

    demo_username = '#username'
    demo_password = '#password'
    demo_button = '#submit'
  demousername(username){
    cy.get(this.demo_username).type(username)
  }

  demopassword(password){
    cy.get(this.demo_password).type(password)
  }

  demologin(){
    cy.get(this.demo_button).click()
  }


}