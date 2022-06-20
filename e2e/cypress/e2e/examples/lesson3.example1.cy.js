describe("Get & Find",function(){
    before(()=>{
        cy.visit('/jobs/egypt')
    })

    it("Asynchronous vs .synchronous ex1",function(){
        cy.get('input')

        cy.wait(4000)
        
        console.log('This is not cypress command1')
        
    });

    it("Asynchronous vs .synchronous ex2",function(){

        cy.get('input')

        cy.wait(4000)
        
        cy.log('This is a cy log')
        console.log('This is not cypress command')
    });

    it.only("Handle Non-Cypress by .then",function(){

        cy.get('input')

        cy.wait(4000)

        cy.log('This is a cy log')
        .then(()=>{
            let x=5
            let y=5
            console.log(x+y)
        })
        
    });
})