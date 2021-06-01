describe('User can see single article', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles', {
      fixture: 'articles.json',
    });
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/**', {
      fixture: 'article.json',
    });
    cy.intercept(
      'GET',
      'https://fakest-newzz.herokuapp.com/api/auth/validate_token',
      {
        fixture: 'visitorLogin.json',
      }
    );
    cy.intercept(
      'POST',
      'https://fakest-newzz.herokuapp.com/api/auth/sign_in',
      {
        fixture: 'visitorLogin.json',
      }
    );
    cy.visit('/');
  });
  it('is expected to display selected article', () => {
    cy.get('[data-testid=article]').first().click();
    cy.get('[data-testid=email-input]').type('bob.kramer@hotmail.com');
    cy.get('[data-testid=password-input]').type('password');
    cy.get('[data-testid=login-submit]').click();
    cy.wait(1000);
    cy.get('[data-testid=single-article-view]').within(() => {
      cy.get('[data-testid=title]').should(
        'contain',
        'Canada SWAT team molest the Queen'
      );
      cy.get('[data-testid=body]').should('exist');
      cy.get('[data-testid=image]').should('exist');
      cy.get('[data-testid=date]').should('contain', '2021-05-25');
      cy.get('[data-testid=author]').should('contain', 'Mr. Fake');
    });
  });
});
