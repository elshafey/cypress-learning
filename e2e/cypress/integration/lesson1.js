/*
1. Folder Structure
2. Basic constructs in Cypress:
    a. describe()
    b. context()
    c. it()
    d. before()
    e. after()
    f. beforeEach()
    g. afterEach()
    i. only()
    j. skip()
3. How to write cypress test case? (Prerequisite, action, expectations) see Example1
4. A tour in the Test Runner

5. Locators: cypress depends on CSS Selectors
    a. ID: Syntax: <HTML tag><#><Value of ID attribute>, Example input#userid
    b. Class: Syntax: <HTML tag><.><Value of Class attribute>, Exampe input.login-input
    c. Attribute: Syntax: <HTML tag><[attribute=Value of attribute]>, Example input[name=username]
    d. Substring: using rehexp
    e. Inner Text
6. Selector Playground in Cypress

7. get&find Commands
    a. get command:
        syntax: cy.get(selector),cy.get(selector,options) https://www.toolsqa.com/cypress/cypress-get-command/#:~:text=Option,the%20root%20element.
        eq function
        chaining commands
        within function

    b. find filter


*/

describe.skip("Example1", function(){
    it("Test Case1",function(){
        /*
            Prerequisit:
            Go to the target page
        */
        cy.visit('/jobs/egypt')

        /*
            Action:
            Click on the burger menu
        */
        cy.get(':nth-child(1) > .dropdown > .dropdown-toggle').click()

        cy.get('.dropdown-menu').should('be.visible')
    })
})

describe("Get & Find",function(){
    it.only("Get Example1",function(){
        
        cy.visit('/jobs/egypt')

        cy.get('input')
        cy.get('input',{log: false})

        // cy.get('input',{
        //         withinSubject: document.getElementsByClassName('search-bar'),
        //         timeout: 10000
        //     });

        // dealing with multiple elements
        cy.get('button').eq(3).should('contain','Search Jobs')
        
        //chaining
        // cy.get('button').eq(3).click()

        // within example
        cy.get('form').within(()=>{
            cy.get('input')
        })
    });
})