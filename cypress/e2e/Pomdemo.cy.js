import {LoginPage} from "./pages/login_page"

const loginpage = new LoginPage()

it('POM Demo', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
   loginpage.enterusername('Admin')
   loginpage.enterpassword('admin123')
   loginpage.loginbutton()

   // oxd-input oxd-input--active
})