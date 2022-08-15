// import LoginPage from '../../support/PageObjects/LoginPage'

describe("Network Interception", () => {
    beforeEach(() => {
        // cy.login('test147@test.com', '12345678')
        // cy.login('mai@wuzzuf.net', '12345678')
        
    })
    it.only('Rout Matcher',()=>{
        //login by employer account
        cy.login('mai@wuzzuf.net', '12345678')
        cy.wait(5000);
        // login by js account
        cy.login('Automation123@cypress.com', '12345678')
        cy.wait(5000);

        //login by employer account
        cy.login('mai@wuzzuf.net', '12345678')
        cy.wait(5000);
        // login by js account
        cy.login('Automation123@cypress.com', '12345678')
        cy.wait(5000);

        

        let m=Cypress.minimatch('https://testing.wuzzuf.basharsys.com/api/employer/unread-suggested-apps?sort=-createdAt&include=employerUser,talentApplication.talentUser,talentApplication.lookupOpportunityFolder,talentApplication.applicationScore,talentApplication.opportunity.createdBy,talentApplication.opportunity.company,talentApplication.opportunity.opportunityWorkTypes.workType,talentApplication.opportunity.opportunityFolderSetup.lookupOpportunityFolder&page[offset]=0&page[limit]=40'
        , '**/api/employer/unread-suggested-apps**', {
            matchBase: true,
        })
        console.log(m)
        expect(m, 'matching wildcard').to.be.true
    })
    it("Example1: Simple request matching", () => {
        cy.intercept(
            {
                // pathname : /\/api\/employer\/unread-suggested-apps/
                pathname : "/api/employer/unread-suggested-apps"
            }
        ).as('api')
        cy.visit('/dashboard')
        cy.wait('@api')
    })

    it.skip("Example2: Stub the request with full data",()=>{
        cy.intercept(
            {
                pathname : /\/api\/employer\/unread-suggested-apps/
            }
          ,{fixture:'dashboard/unread-suggested-apps.json'}
        ).as('api')
        cy.visit('/dashboard')
        // cy.wait('@api')
    })

    it.skip("Example2: Stub the request with one result",()=>{
        cy.intercept(
            {
                pathname : /\/api\/employer\/unread-suggested-apps/
            }
          ,{fixture:'dashboard/unread-suggested-apps-1-result.json'}
        ).as('api')
        cy.visit('/dashboard')
        // cy.wait('@api')
    })

    it.skip("Example3: Stub the request with two pages",()=>{
        cy.intercept(
            {
                pathname : /\/api\/employer\/unread-suggested-apps/
            }
          ,{fixture:'dashboard/unread-suggested-apps-2-pages.json'}
        ).as('api')
        cy.visit('/dashboard')
        // cy.wait('@api')
    })

    it.skip("Example4: Stub the request with no results",()=>{
        cy.intercept(
            {
                pathname : /\/api\/employer\/unread-suggested-apps/
            }
          ,{}
        ).as('api')
        cy.visit('/dashboard')
        // cy.wait('@api')
    })

    it.skip("Dump output to files",()=>{
        let responses={};
        cy.intercept(
            {
                pathname: /\/api\//
            }
            ,(req) => {
                req.on('response', (res) => {
                    // responses[decodeURI(req.url).replace(/[^a-zA-Z0-9]/g,'_')]=res.body
                    responses[req.url]=res.body
                    return res
                })
            }
          //,{fixture:'employer-data-response.json'}
          )
          cy.visit('/dashboard')
        cy.wait(30000).then(()=>{
            // responses.forEach((res,fileName)=>{
            //     console.log(fileName);
            //     console.log(res);
            //     cy.writeFile('cypress/out/'+fileName+'.json',res)
            // })
            // for (const [fileName, res] of Object.entries(responses)) {
            //     cy.writeFile('cypress/out/'+fileName+'.json',res)
            // }
            // console.log(responses);
            cy.writeFile('cypress/out/dashboard-requests.json',responses)
        })
    })
})