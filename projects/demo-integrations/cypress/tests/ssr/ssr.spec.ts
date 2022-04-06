describe('Server side rendering', () => {
    it('should serve statics and favicon.ico', () => {
        cy.request('http://localhost:4000/favicon.ico')
            .its('status')
            .should('equal', 200);
    });

    it('should successfully render static url', () => {
        cy.request('http://localhost:4000')
            .its('body')
            .should('include', 'This is a static route');
    });

    it('should successfully render lazy url', () => {
        cy.request('http://localhost:4000/lazy')
            .its('body')
            .should('include', 'This is a lazy route');
    });
});
