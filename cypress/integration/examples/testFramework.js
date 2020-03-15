/// <reference types="Cypress" />

import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'
import CheckoutPage from '../pageObjects/CheckoutPage'
import DeliveryPage from '../pageObjects/DeliveryPage'

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
        const checkoutPage = new CheckoutPage()
        const deliveryPage = new DeliveryPage()

        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
        homePage.getShopTab().click()
         
        this.productos.productName.forEach(element => {
            cy.selectProduct(element)
        });

        productPage.getCheckoutButton().click()
        
        checkoutPage.getConfirmCheckoutButton().click()

        deliveryPage.getCountryTextBox().type(this.productos.deliveryCountry)
        cy.wait(2000)
        cy.get('.suggestions a').click()
        deliveryPage.getCheckTermsAgreement().click()
        deliveryPage.getPurchaseButton().click()
        cy.get('.alert').should('contain', 'Success!')
        
    })
})