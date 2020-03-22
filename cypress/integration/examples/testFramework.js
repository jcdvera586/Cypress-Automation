/// <reference types="Cypress" />

import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'
import CheckoutPage from '../../support/pageObjects/CheckoutPage'
import DeliveryPage from '../../support/pageObjects/DeliveryPage'

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
        cy.visit(Cypress.env("baseUrl")+Cypress.env("angular"))
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

        Cypress.config('defaultCommandTimeout', 8000)

        cy.visit(Cypress.env("baseUrl")+Cypress.env("angular"))
        homePage.getShopTab().click()
         
        this.productos.productName.forEach(element => {
            cy.selectProduct(element)
        });

        productPage.getCheckoutButton().click()

        var sum=0
        //TODO:Crear Custom Method para este suma de precios
        cy.get('tr td:nth-child(4) strong').each(($el, index) => {
            const price = $el.text()
            var priceText = price.split(" ")
            priceText = priceText[1].trim()
            sum=Number(sum)+Number(priceText)
        }).then(function() {
            cy.log(sum)
        })

        cy.get('h3 strong').then(function(element) {
            var total = element.text().split(" ")
            total = total[1].trim()
            expect(Number(total)).to.equal(sum)
        })

        checkoutPage.getConfirmCheckoutButton().click()

        deliveryPage.getCountryTextBox().type(this.productos.deliveryCountry)
    
        cy.get('.suggestions a').click()
        deliveryPage.getCheckTermsAgreement().click({force:true})
        deliveryPage.getPurchaseButton().click()
        cy.get('.alert').should('contain', 'Success!') //forma 1 de valdiar
        
        cy.get('.alert').then(function(element) {
            const actualText = element.text()
            expect(actualText.includes('Success')).to.be.true //forma 2 de validar
        })
        
    })
})