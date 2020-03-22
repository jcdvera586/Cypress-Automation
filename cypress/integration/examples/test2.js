/// <reference types="Cypress" />

describe('My second Test Suite', function() {
    it('shoping element', function() {
        cy.visit(Cypress.env("baseUrl")+Cypress.env("selenium"))
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        cy.get('.products').as('productList')
        cy.get('@productList').find('.product').each(($el, index, $list) => {
            const products = $el.find('h4.product-name').text()
            if(products.includes('Cashews')){
                $el.find('button').click()
            }
        })

        cy.get('.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})