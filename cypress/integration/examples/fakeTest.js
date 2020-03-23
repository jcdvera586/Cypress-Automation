/// <reference types="Cypress" />

describe('MockTest XHR testing', function(){
    it('MockTest', function(){
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.server()
        cy.route({
            method: 'PUT',
            url: 'comments/*',
            status: 404,
            response: {
                error: "Hey Comment do not exist"
            }
        }).as("updateComment")
        cy.get('.network-put').click()
        cy.get('.network-put-comment').should('contain', 'Hey Comment do not exist')
    })
})