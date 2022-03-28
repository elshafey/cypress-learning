describe("Example1", function(){
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

        /*
            Expectations
        */
        cy.get('.dropdown-menu').eq(0).should('be.visible')
        cy.get('.dropdown-menu').eq(0).should('be.hidden')
    })
})