import LoginPage from './PageObjects/LoginPage'

Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
        cy.visit('/login')
        const loginPage = new LoginPage();
        cy.intercept('POST','/login/submit').as('loginRequest')
        loginPage.navigate()
            .enterUsername(username)
            .enterPassword(password)
            .submit()
        cy.wait(['@loginRequest'])
    })
})