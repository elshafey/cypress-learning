
import CareerLevel from '../../support/PageObjects/CareerLevel'
// import LoginPage from '../../support/PageObjects/CareerLevel'

// import login from  '../../support/helpers'

describe("Page Object Model Examples",()=>{

    it.only("Login Happy Scenario - Incomplete Profile",()=>{
        cy.login('test-first-step@cypress.com','12345678')
        cy.visit('/setup/career-interests?sut=reg&login=1')
        
        const careerLevelList= new CareerLevel();
        careerLevelList.selectLevel(2);

        careerLevelList.getSelectedLevel()
                       .should('have.length', 1)
                       .should('have.text','Entry Level')
                       .should('have.css','border-color','rgb(77, 147, 255)')
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