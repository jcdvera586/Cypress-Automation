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
    it('Test visible-invisible Objects', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })
    it('radio-Button TestCase', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[value="radio2"]').check().should('be.checked')
    })
    it('webTable testCase', function() {
        //validate price for a course
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each(($el, index) => {
            const courseText = $el.text()
            if(courseText.includes("Python")) {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(coursePrice) {
                    const price = coursePrice.text()
                    expect(price).to.equal('25')
                })                
            }
        })
    })
    it('Mouse Hover TestCase', function() {
        cy.eventNames('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.mouse-hover').find('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')
    })
    it('Forcing click Invisible button', function() {
        cy.eventNames('https://rahulshettyacademy.com/AutomationPractice/')
        cy.contains('Top').click({force: true})
        cy.url().should('include', 'top')
    })
})