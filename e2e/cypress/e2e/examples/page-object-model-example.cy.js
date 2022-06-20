
// import LoginPage from '../../support/PageObjects/LoginPage'

import login from  '../../support/helpers'

describe("Page Object Model Examples",()=>{

    it.only("Login Happy Scenario - Incomplete Profile",()=>{
        cy.login('test-success-incomplete@test.com','12345678')
    })

    it("Login Happy Scenario - Complete Profile",()=>{
        // const loginPage= new LoginPage();

        // loginPage.navigate()
        //          .enterUsername('test-success@test.com')
        //          .enterPassword('12345678')
        //          .submit();
        login('test-success-incomplete@test.com','12345678')
    })

    it("Login - invalid credentials",()=>{
        const loginPage= new LoginPage();

        loginPage.navigate()
                 .enterUsername('test-failure@test.com')
                 .enterPassword('12345678')
                 .submit();
        
        loginPage.getErrorMsg().should(
        (val)=>{
            expect(val).to.eq('Incorrect email or password')
        }
        )
    })
})