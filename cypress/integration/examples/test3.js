/// <reference types="Cypress" />
describe('Test set 3' , function() {
    it('CheckBox TestCase' , function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('input#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])
    })
    it('Static Dropdown TestCase', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('select#dropdown-class-example').select('Option2').should('have.value','option2')
    })
    it('Dynamic Dropdown TestCase', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input#autocomplete').type('ind')
        cy.get('li.ui-menu-item .ui-menu-item-wrapper').each(($el, index, $list) => {
            const country = $el.text()
            if(country === "India") {
                $el.click()
            }
        })
        cy.get('input#autocomplete').should('have.value', 'India')
    })
})