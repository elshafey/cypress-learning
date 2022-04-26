const fixtureFiles=[
    "js-signup.ex1.json",
    "js-signup.ex2.json",
]
// const fistnameFiles=[
//     'first-name.postfix.json',
//     'first-name.prefix.json'
// ]
describe.skip("inline Data Example",function(){
    
    beforeEach(()=>{
        cy.visit('/register')
    })
    
    it("Fixture test",()=>{
            cy.get('#firstname').clear().type("#test")
            cy.get('.css-6lejne').focus()
            cy.get(':nth-child(1) > .css-y0dsrb').should('be.visible')
            cy.wait(2000)

            cy.get('#firstname').clear().type("test$")
            cy.get('.css-6lejne').focus()
            cy.get(':nth-child(1) > .css-y0dsrb').should('be.visible')
            cy.wait(2000)

            cy.get('#firstname').clear().type("t")
            cy.get('.css-6lejne').focus()
            cy.get(':nth-child(1) > .css-y0dsrb').should('be.visible')
            cy.wait(2000)
    })
    
})
describe.skip("Predefined Data Example",function(){

    before(()=>{
        this.data=[
            {
                'firstName':'#test',
                'errorMsg':'Name must not have special characters'
            },
            {
                'firstName':'test#',
                'errorMsg':'Name must not have special characters'
            },
            {
                'firstName':'t',
                'errorMsg':'Name must be 2 characters at least'
            }
        ]
    })
    
    beforeEach(()=>{
        cy.visit('/register')
    })
    
    it("Fixture test",()=>{
        this.data.forEach(signupData => {
            cy.get('#firstname').clear().type(signupData.firstName)
            cy.get('.css-6lejne').focus()
            cy.get(':nth-child(1) > .css-y0dsrb').should('be.visible')
            .should('contain',signupData.errorMsg)
            cy.wait(2000)
        })
    })
    
})

describe.only("Predefined Fixture Example",function(){

    before(()=>{
        cy.fixture("js-firstname-example.json").then((data)=>{
            this.data=data
        })
    })
    
    beforeEach(()=>{
        cy.visit('/register')
    })
    
    it("Fixture test",()=>{
        this.data.forEach(signupData => {
            cy.get('#firstname').clear().type(signupData.firstName)
            cy.get('.css-6lejne').focus()
            cy.get(':nth-child(1) > .css-y0dsrb').should('be.visible')
            .should('contain',signupData.errorMsg)
            cy.wait(2000)
        })
    })
    
})

describe.skip("Inline Data Success",()=>{
    beforeEach(()=>{
        cy.visit('/register')
    })
    it("test",()=>{
        cy.get('#firstname').type('test')
        cy.get('#lastname').type('test')
        cy.get('#email').type('test' + Math.floor(Math.random() * 10000) + '@gmail.com')
        cy.get('.css-1xmsobw').type('12345678')
        cy.get('.css-6lejne').click()
    })
})