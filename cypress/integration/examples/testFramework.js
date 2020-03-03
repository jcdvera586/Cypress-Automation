/// <reference types="Cypress" />

describe('Framework test cases', function() {
    before(function() {

    })
    it('first TestFramework testcase', function() {
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type("Bob")
        cy.get('select').select("Female")

    })
})