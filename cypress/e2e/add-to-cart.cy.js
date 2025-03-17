describe('Add to Cart Test on Saucedemo', () => {
    it('Logs in and adds an item to cart', () => {
      cy.fixture('userData').then((user) => {
        const standardUser = user.standardUser;
      // Login dulu
      cy.visit('https://www.saucedemo.com/', { timeout: 120000 });
      cy.get('#user-name').type(standardUser.username);
      cy.get('#password').type(standardUser.password);
      cy.get('#login-button').click();
      cy.url().should('include', '/inventory.html');
      
      // Tambah item ke cart
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
      
      // Cek tombol berubah jadi "Remove"
      cy.get('[data-test="remove-sauce-labs-bike-light"]').should('be.visible');
      
      
      // Cek cart badge bertambah
      cy.get('.shopping_cart_badge').should('have.text', '1');

      // Setelah cek badge cart
      cy.get('.shopping_cart_link').click(); // Klik ikon cart
      cy.url().should('include', '/cart.html');
      cy.get('.cart_item').should('have.length', 1); // Cek ada 1 item
      cy.contains('Sauce Labs Bike Light').should('be.visible');
    });
  });
});