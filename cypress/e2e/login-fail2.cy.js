it('Fails to login with locked user', () => {
    cy.fixture('userData').then((user) => {
      const lockedUser = user.lockedUser;
  
      cy.visit('https://www.saucedemo.com/', { timeout: 120000 });
      cy.get('#user-name').type(lockedUser.username);
      cy.get('#password').type(lockedUser.password);
      cy.get('#login-button').click();
      cy.contains('Epic sadface: Sorry, this user has been locked out').should('be.visible');
    });
  });