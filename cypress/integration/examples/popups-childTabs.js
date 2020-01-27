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
        cy.get('#opentab').invoke('removeAttr', 'target').click()
    })


})