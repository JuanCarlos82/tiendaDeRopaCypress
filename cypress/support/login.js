Cypress.Commands.add('login', (email, password)=>{
    cy.fixture('login').then((login)=>{
        cy.get(login.loginlink).click();
        cy.get(login.email).type(email);
        cy.get(login.password).type(password);
        cy.get(login.loginButton).click();
    })
})