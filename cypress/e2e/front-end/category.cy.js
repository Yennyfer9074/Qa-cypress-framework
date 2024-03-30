describe('Filter by', () => {
    it('TC-009: FE Filter product by phone', () => {
        cy.visit('/'); 
        cy.contains('Phones');
        cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').should('be.visible');
        cy.screenshot();
    });
    it('TC-010: FE Filter product by Laptops', () => {
        cy.visit('/'); 
        cy.wait(2000);
        cy.contains('Laptops').click();
        cy.get(':nth-child(8) > .card > :nth-child(1) > .card-img-top').should('be.visible');
        cy.scrollTo('bottom', { duration: 5000 }); 
        cy.wait(1000);
        cy.screenshot();
    });
});