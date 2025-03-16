describe('Multiple Items Test on Saucedemo', () => {
    it('Adds multiple items to cart and verifies', () => {
      cy.visit('https://www.saucedemo.com/', { timeout: 120000 });
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.url().should('include', '/inventory.html');
  
      // Tambah 2 item
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_badge').should('have.text', '2');
  
      // Cek cart
      cy.get('.shopping_cart_link').click();
      cy.url().should('include', '/cart.html');
      cy.get('.cart_item').should('have.length', 2);
      cy.contains('Sauce Labs Bike Light').should('be.visible');
      cy.contains('Sauce Labs Backpack').should('be.visible');
    });
  });