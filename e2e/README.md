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
      - 