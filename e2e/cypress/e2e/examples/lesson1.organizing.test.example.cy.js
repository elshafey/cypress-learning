
describe.only("Test Case Context",function(){
    
    it("Individual Test1",function(){
         cy.visit('jobs/egypt')
    })

    it.skip("Individual Test2",function(){
        cy.visit('jobs/egypt')
   })
})

describe("Test Case Context2",function(){
    it("Individual Test1",function(){
         cy.visit('jobs/egypt')
    })

    it("Individual Test2",function(){
        cy.visit('jobs/egypt')
   })
})