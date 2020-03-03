/// <reference types="Cypress" />

describe('Framework test cases', function() {

    before(function() {
        cy.fixture('example').then(function(data) {
            this.data = data
        })
    })

    it('first TestFramework testcase', function() {
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get('input[name="name"]:nth-child(1)').should('have.value', this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
        cy.get('#inlineRadio3').should('be.disabled')
    })
})