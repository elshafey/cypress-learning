const fixtureFiles=[
    "js-signup.ex1.json",
    "js-signup.ex2.json",
]
// const fistnameFiles=[
//     'first-name.postfix.json',
//     'first-name.prefix.json'
// ]
describe.skip("Fixture Example",function(){

    before(()=>{
        cy.fixture("js-signup.ex1.json").then((data)=>{
                this.data=data
            }
        )
    })
    
    beforeEach(()=>{
        cy.visit('/register')
    })

    it("Fixture test",()=>{
        cy.get('#firstname').type(this.data.firstName)
        cy.get('#lastname').type(this.data.lastName)
        cy.get('#email').type(this.data.email)
        cy.get('.css-1xmsobw').type(this.data.password)
    })
})
describe.skip("test",function(){

    it("test",()=>{
        cy.visit('/register')
        cy.get('#firstname').type("test#")
        cy.get('#lastname').type("test")
    })
    it("test",()=>{
        cy.visit('/register')
        cy.get('#firstname').type("#test")
        cy.get('#lastname').type("test")
    })
})
describe("Fixture Example2",function(){

    // before(()=>{
        
    //     cy.fixture("js-signup.ex1").then((data)=>{
    //         this.data=data
    //     })
    // })
    
    beforeEach(()=>{
        cy.visit('/register')
    })
    fixtureFiles.forEach(filename => {
        describe("Fixture Example - "+filename,()=>{
            before(()=>{
                cy.fixture(filename).then((data)=>{
                    this.data=data
                    console.log(this.data)
                })
            })
            it("",()=>{
            cy.log(this.data)
            cy.get('#firstname').type(this.data.firstName)
            cy.get('#lastname').type(this.data.lastName)
            cy.get('#email').type(this.data.email)
            cy.get('.css-1xmsobw').type(this.data.password)
            })    
        })
    })
    
})