// import LoginPage from '../../support/PageObjects/LoginPage'

describe("Network Interception", () => {
    beforeEach(() => {
        cy.login('test147@test.com', '12345678')
        
    })
    it("Example1", () => {
        // const loginPage= new LoginPage();
        // cy.intercept(/\/api\/*/).as('apiData')
        cy.intercept({
            pathname: /.+/
          }
          //,{fixture:'employer-data-response.json'}
          ).as('apiData')
        
        cy.visit('/dashboard')

        cy.get('@apiData.all').then((xhrs) => {
            cy.log(xhrs)
        })
    })
})

// curl 'https://testing.wuzzuf.basharsys.com/login/submit' \
//   -H 'Connection: keep-alive' \
//   -H 'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36' \
//   -H 'Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryaZJq0KSHHnBWL6L8' \
//   -H 'Accept: application/json' \
//   -H 'X-Transaction-ID: d634ab2b-2889-4703-8927-319917ced133' \
//   -H 'X-Requested-With: XMLHttpRequest' \
//   -H 'sec-ch-ua-platform: "Linux"' \
//   -H 'Origin: https://testing.wuzzuf.basharsys.com' \
//   -H 'Sec-Fetch-Site: same-origin' \
//   -H 'Sec-Fetch-Mode: cors' \
//   -H 'Sec-Fetch-Dest: empty' \
//   -H 'Referer: https://testing.wuzzuf.basharsys.com/login' \
//   -H 'Accept-Language: en-US,en;q=0.9' \
//   --data-raw $'------WebKitFormBoundaryaZJq0KSHHnBWL6L8\r\nContent-Disposition: form-data; name="email"\r\n\r\ntest147@test.com\r\n------WebKitFormBoundaryaZJq0KSHHnBWL6L8\r\nContent-Disposition: form-data; name="password"\r\n\r\n12345678\r\n------WebKitFormBoundaryaZJq0KSHHnBWL6L8--\r\n' \
//   --compressed \
//   --insecure