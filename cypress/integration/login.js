
describe('Login',()=>{
    beforeEach(()=>{
        cy.visit('/');
    })
    it('Login with incorrrect email',()=>{
        cy.login('error_mail', 'error_password');
        cy.fixture('login').then((login)=>{
            cy.get(login.incorrectLoginBanner).should('contain','Invalid email address');

        })
        
    })
})