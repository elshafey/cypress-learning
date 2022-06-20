describe("Get & Find",function(){
    before(()=>{
        cy.visit('/jobs/egypt')
    })

    it("Implicit Assertions - Example1",function(){

        cy.get(':nth-child(1) > .dropdown > .dropdown-toggle').click()

        cy.get('.dropdown-menu').eq(0)
        .should('be.visible')
        .and('have.css','width','280px')
    });

    it.only("Implicit Assertions - Example2",function(){

        cy.get(':nth-child(1) > .dropdown > .dropdown-toggle').click()

        cy.get('.dropdown-menu').eq(0)
        .should('be.visible') //assert if it is visible
        .and('have.css','width','280px') //check if the element width as expected
        .find('li') // filter by menu items
        .should('have.length',10)
        .first()
        .should('contains.text','Career Coaching')
    });
})