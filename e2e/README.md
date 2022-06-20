1. Folder Structure
2. Basic constructs in Cypress [example](cypress/integration/lesson1.organizing.test.example.js):
    - describe()
    - context()
    - it()
    - before()
    - after()
    - beforeEach()
    - afterEach()
    - only()
    - skip()
3. How to write cypress test case? (Prerequisit, action, expectations) ([Check this Example](cypress/integration/examples/lesson1.example2.js))
4. A tour in the Test Runner

5. Locators: cypress depends on CSS Selectors. [reference](https://www.w3schools.com/cssref/css_selectors.asp)
        
        <html>
            <head>
                <title>Demo Site</title>
            </head>
            <body>
                <h1>Demo Site</h1>
                </br>
                <div class="class1">
                    <div>
                        <label>UserName:</label>
                        <input id="userid" class="login" name="username" type='check'>
                    </div>
                </div>
            </body>
        </html>
    - Tag Name: Syntax `<HTML Tag>`, Example `h1`
    - ID: Syntax: `<HTML tag><#><Value of ID attribute>`, Example input#userid
    - Class: Syntax: `<HTML tag><.><Value of Class attribute>`, Exampe input.login-input
    - Attribute: Syntax: `<HTML tag><[attribute=Value of attribute]>`, Example input[name=username]
    - Nested Selectors: `<Selector1> > <Selector2>`, Example `.class1 > div > input`
    - Quiz1: Locate the input with attribut `name` equal `username`
    ``` html
    <html>
        <div class="class1"> 
            <input name="username" type='text'>
        </div>
        <div class="class2"> 
            <input name="username" type='text'>
        </div>
    </html>
   ```
   - Quiz2: Locate the input with attribut `name` equal `username`
    ``` html
    <html>
        <div> 
            <input name="username" type='text'>
        </div>
        <div> 
            <input name="email" type='text'>
        </div>
    </html>
   ```

6. Selector Playground in Cypress

7. get&find Commands ([Example](cypress/integration/examples/lesson2.example1.js))
    - get command:  
        - syntax: cy.get(selector),cy.get(selector,options)
        - eq function
        - chaining commands
        - within function

    - `find()` filter
8. Asynchronous vs. synchronous ([Examples](cypress/integration/examples/lesson3.example1.js))
    - Handling Asynchronous by .then
9. Cypress Assertions ([Examples](cypress/integration/examples/lesson3.example2.js))
   1.  Implicit Assertions
       1.  .should(), .and()
       2.  Applies to the object provided by the parent chained command
   2.  Explicit Assertions
   3.  Cypress automatically perform assertions on his own commands like .visit(), .get(), .click()
   4.  Common assertions [here](https://docs.cypress.io/guides/references/assertions#Common-Assertions)

10. UI interactions [here](https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Actionability)
11. Fuxtures [examples](cypress/integration/examples/lesson4.example1.js)
    1.  What is fixture
    2.  JSON objects
    3.  ```this``` keyword
12. Network Requests
    1.  routeMatcher [here](https://docs.cypress.io/api/commands/intercept#routeMatcher-RouteMatcher)