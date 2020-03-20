class ProductPage {

    getCheckoutButton() {
        return cy.get('a.nav-link.btn.btn-primary')
    }

}

export default ProductPage