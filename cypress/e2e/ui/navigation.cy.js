describe('Navigation Nynecorp', () => {

  beforeEach(() => {
    cy.visit('/fr');
  });

  it('Navigation vers Apropos et Contact', () => {

    cy.get('a[href="/fr"]').filter(':visible').first().click();

    cy.get('a[href="/fr/Apropos"]').filter(':visible').first().click();

    cy.contains('a', 'Contact').filter(':visible').first().click();

    cy.get('input').should('be.visible');
    cy.get('textarea').should('be.visible');
    cy.contains('button', 'Envoyer').should('be.visible');

  });

});
