/// <reference types="Cypress" />

describe('PopUps and Child Tabs TestSet', function() {
    it('Alert-Confirm autoaccept testcase', function() {
        //cypress auto-accepts alerts and pop ups
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //window:alert
        cy.get('#alertbtn').click()

        cy.on('window:alert', (string) => {
            //Mocha
            expect(string).to.equal('Hello , share this practice page and share your knowledge')
        })
        //window:confirm
        cy.get('[value="Confirm"]').click()

        cy.on('window:confirm', (string) => {
            expect(string).to.equal('Hello , Are you sure you want to confirm?')
            //to cancel confirmation
            return false
        })
    })

    it('Child Tab management testCase', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //remove attribute "target" to avoid child tab
        cy.url().should('include', 'AutomationPractice')
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        // go back to first webpage
        cy.wait(2000)
        cy.url().should('include', 'index')
        cy.go('back')        
        cy.url().should('include', 'AutomationPractice')
    })

    it('Child Window management testCase', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function(element) {
            const url = element.prop('href')
            cy.visit(url)
        })

    })


})