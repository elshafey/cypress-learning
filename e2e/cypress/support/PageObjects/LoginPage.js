class LoginPage
{
    navigate(){
        cy.visit('/login')
        return this;
    }

    enterUsername(username)
    {
        cy.get('.css-1n6f2sr')
          .clear()
          .type(username);
        
          return this;
    }

    enterPassword(password)
    {
        cy.get('.css-1xmsobw').clear().type(password);

        return this;
    }

    submit(){
        cy.get('.css-14ghl4e').click();

        return this;
    }

    getErrorMsg(){
        return cy.get('.css-1549ajr > div').invoke('text');
    }
}

export default LoginPage
