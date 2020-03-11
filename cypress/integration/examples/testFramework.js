/// <reference types="Cypress" />

import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'

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
        const homePage = new HomePage()
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEnterpreneaur().should('be.disabled')
    })

    it('shop testCase', function() {
        const homePage = new HomePage()
        const productPage = new ProductPage()
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
        homePage.getShopTab().click()

        // var productos = this.products
        // this.products.productName.forEach(function(element) {
        //     cy.selectProduct(element)
        // });

        this.productos.productName.forEach(element => {
            cy.selectProduct(element)
        });

        productPage.getCheckoutButton().click()      
        
    })
})