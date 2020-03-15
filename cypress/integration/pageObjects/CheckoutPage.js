class CheckoutPage {

    getConfirmCheckoutButton() {
        return cy.get('button.btn.btn-success')
    }

}

export default CheckoutPage