/// <reference types="Cypress" />

describe('My First Test', function() {
    it('My First TestCase', function() {
        cy.visit(Cypress.env("baseUrl")+Cypress.env("selenium"));
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        //cy.get('.product:visible').should('have.length',4);
        //Parent-child chaining
        cy.get('.products').find('.product').should('have.length',4);
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
    })
    it('Search product by name', function() {
        cy.visit(Cypress.env("baseUrl")+Cypress.env("selenium"));
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.products').find('.product').should('have.length',4);

        cy.get('.products').find('.product').each(($el, index, $list) => {
            const productName = $el.find('h4.product-name').text();
            if(productName.includes('Cashews')) {
                $el.find('button[type=button]').click();
            }
        })
    })
})