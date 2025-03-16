describe('Login Test on Saucedemo', () => {
    it('Logs in with valid credentials', () => {
      // Tambah timeout dan retry
      cy.visit('https://www.saucedemo.com/', { timeout: 120000, retryOnNetworkFailure: true });
      cy.get('body').should('be.visible');
      
      // Pastikan form login ada
      cy.get('#login-button').should('be.visible');
      
      // Isi form
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      
      // Cek hasil login
      cy.url().should('include', '/inventory.html');
      cy.contains('Products').should('be.visible');
    });
  });