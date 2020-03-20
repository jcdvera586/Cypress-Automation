class DeliveryPage {

    getCountryTextBox() {
        return cy.get('input#country')
    }

    getPurchaseButton() {
        return cy.get('input[value="Purchase"]')
    }

    getCheckTermsAgreement() {
        return cy.get('.checkbox > label')
    }
}
export default DeliveryPage