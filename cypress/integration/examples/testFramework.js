/// <reference types="Cypress" />

describe('Framework test cases', function() {

    beforeEach(function() {
        cy.fixture('example').then(function(data) {
            this.data = data
        })
        cy.fixture('products').then(function(productos) {
            this.productos = productos
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

    it('shop testCase', function() {
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(2) > .nav-link').click()

        // var productos = this.products
        // this.products.productName.forEach(function(element) {
        //     cy.selectProduct(element)
        // });

        this.productos.productName.forEach(element => {
            cy.selectProduct(element)
        });
        
        
    })
})