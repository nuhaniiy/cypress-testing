describe('My Second Test', () => {
    it('Visits example.com, checks text, and clicks a link', () => {
      // Buka website
      cy.visit('https://example.com');
  
      // Cek apakah teks "Example Domain" ada di halaman
      cy.contains('Example Domain').should('be.visible');
  
      // Cari link "More information..." dan klik
      cy.contains('More information...').click();
  
      // Pastikan URL berubah ke halaman baru
      cy.url().should('include', 'iana.org');
    });
  });