/// <reference types="Cypress" />

describe('My First Test Suite', function() {
    it('My First testCase', function() {
        cy.visit(Cypress.env("baseUrl")+Cypress.env("selenium"));
        cy.get('.search-keyword').type('ca');
        cy.wait(2000)

        cy.get('.products').find('.product').should('have.length', 4)
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                $el.find('button').click()
            }
        })
    })
    it('Second TestCase', function() {
        cy.visit(Cypress.env("baseUrl")+Cypress.env("selenium"));
        cy.get('.search-keyword').type('ca');
        cy.wait(2000)

        cy.get('.brand > a > img').should('have.text', '')

        cy.get('.brand > a > img').then(function(logoelement){
            cy.log(logoelement.text())
        })
    })
    it('using Alias', function() {
        cy.visit(Cypress.env("baseUrl")+Cypress.env("selenium"))
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        cy.get('.products').as('productList')
        cy.get('@productList').find('.product').should('have.length', 4)
    })
})