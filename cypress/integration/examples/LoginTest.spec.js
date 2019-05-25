describe('Test a login page with Cypress', () => {
    before (() => {
        //any conditions you may want to provide before running the test
    })
    
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('session_id', 'remember_token')
        Cypress.Cookies.debug(true) // now Cypress will log out when it alters cookies

        
        cy.setCookie('wordpress_test_cookie', '"WP+Cookie+check"')
    })
    
    //basic wordpress login website
    it ('Navigate to Testing Web Page',() => {
        cy.visit('https://s1.demo.opensourcecms.com/wordpress/wp-login.php')
        
    })
    // demo credentials username = opensourcecms password = opensourcecms
    it ('Login with your Credentials', () => {
        cy.get('#user_login').type("opensourcecms")
        cy.get('#user_pass').type("opensourcecms")
        cy.get('#wp-submit').click()
    })
    it('Verify that you have logged in', () => {
        cy.get("[aria-haspopup='true'] > .display-name", {timeout:60000}).should(($x) => {
            expect($x).to.have.text('opensourcecms')
        })
    })
})