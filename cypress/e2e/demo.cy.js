
import { Demopage } from "./pages/demo_login"
const demopage = new Demopage()
it('Para Demo', ()=>{

   cy.visit('https://practicetestautomation.com/practice-test-login/')
    
    demopage.demousername('student')
    demopage.demopassword('Password123')
    demopage.demologin()




})
