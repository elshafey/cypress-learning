describe("Get & Find",function(){
    before(()=>{
        cy.visit('/jobs/egypt')
    })

    it("Get Example1",function(){

        cy.get('input')
        cy.get('input',{
            log: false
        })

        cy.get('input',{
                withinSubject: document.querySelector('.search-bar'),
                timeout: 1000
            });

        // dealing with multiple elements
        // cy.get('button').eq(3).should('contain','Search Jobs')
        
        // //chaining
        // // cy.get('button').eq(3).click()

        // within example
        // cy.get('.search-bar').within(()=>{
        //     cy.get('input')
        // })
    });

    it("Get Example - Multiple Values Returns",function(){

        // dealing with multiple elements
        cy.get('ul.dropdown-menu li').eq(0).should('contain','Career Coaching')
        
        // //chaining
        // // cy.get('button').eq(3).click()

        // within example
        // cy.get('.search-bar').within(()=>{
        //     cy.get('input')
        // })
    });

    it("Get Example - Chaining Commands",function(){
        
        //chaining
        cy.get('.search-bar > input[type="search"]').type('PHP')
        cy.get('.search-btn-container > button').click()
        // within example
        // cy.get('.search-bar').within(()=>{
        //     cy.get('input')
        // })
    });

    it("Get Example - Within",function(){
        // within example
        cy.get('.search-bar').within(()=>{
            cy.get('input').eq(0).type('PHP')
        })
    });

    it.only("Get Example - Within",function(){
        // within example
        cy.get('.latest-jobs').find('a').should('have.length',9)
        cy.get('.latest-jobs a').should('have.length',9)
        cy.get('.latest-jobs').within(()=>{
            cy.get('a').should('have.length',9)
        })
        cy.get('a',{
            withinSubject: document.querySelector('.latest-jobs'),
        })
        // find('a').should('have.length',9)
        
    });

})