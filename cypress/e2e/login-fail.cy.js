describe('Login Test on Saucedemo', () => {
    it('Shows error message with wrong credentials', () => {
      cy.visit('https://www.saucedemo.com/', { timeout: 120000 });
      cy.get('body').should('be.visible');
      
      // Isi form dengan password salah
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('wrong_password');
      cy.get('#login-button').click();
      
      // Cek error message
      cy.get('.error-message-container').should('be.visible');
      cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible');
    });
  });