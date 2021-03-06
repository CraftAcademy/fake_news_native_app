describe('Visitor is able to login to view a specific article', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles', {
      fixture: 'articles.json',
    });
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/**', {
      fixture: 'article.json',
    });
    cy.visit('/');
    cy.get('[data-testid=article]').first().click();
  });

  describe('successfully through login form', () => {
    beforeEach(() => {
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
    });

    it('is expected to prompt user to log in', () => {
      cy.get('[data-testid=login-header]').should(
        'contain',
        'Please log in to read this article'
      );
      cy.get('[data-testid=email-input]').type('bob.kramer@hotmail.com');
      cy.get('[data-testid=password-input]').type('password');
      cy.get('[data-testid=login-submit]').click();
      cy.get('[data-testid=title]').should(
        'contain',
        '‘It is a trap!’: Inside the QAnon attack that never happened'
      );
      cy.wait(1000);
    });
  });

  describe('successfully through already being authenticated', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        'https://fakest-newzz.herokuapp.com/api/auth/validate_token',
        {
          fixture: 'visitorLogin.json',
        }
      );
      cy.window()
        .its('store')
        .invoke('dispatch', {
          type: 'AUTHENTICATE',
          payload: { data: { first_name: 'Bob', last_name: 'Kramer' } },
        });
    });

    it('is expected to prompt user to log in', () => {
      cy.get('[data-testid=title]').should(
        'contain',
        '‘It is a trap!’: Inside the QAnon attack that never happened'
      );
      cy.wait(1000);
    });
  });

  describe('unsuccessfully without a login', () => {
    beforeEach(() => {
      cy.intercept(
        'POST',
        'https://fakest-newzz.herokuapp.com/api/auth/sign_in',
        {
          statusCode: 422,
          body: { errors: ['Invalid login credentials. Please try again.'] },
        }
      );
    });

    it('is expected to show an error message', () => {
      cy.get('[data-testid=email-input]').type('bob.kramer@hotmail.com');
      cy.get('[data-testid=password-input]').type('assword');
      cy.get('[data-testid=login-submit]').click();
      cy.get('[data-testid=error-message]').should(
        'contain',
        'Invalid login credentials. Please try again.'
      );
    });
  });
});
