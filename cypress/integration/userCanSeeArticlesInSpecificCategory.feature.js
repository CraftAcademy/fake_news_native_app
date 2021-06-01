describe('User can see articles in specific category', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles', {
      fixture: 'articles.json',
    });
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/**', {
      fixture: 'article.json',
    });
  });
  context('by navigating through single artice view', () => {
    describe('Successfully', () => {
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
        cy.intercept(
          'GET',
          'https://fakest-newzz.herokuapp.com/api/articles/?category=**',
          {
            fixture: 'scienceCategories.json',
          }
        );
        cy.visit('/');
        cy.get('[data-testid=article]').first().click();
        cy.get('[data-testid=email-input]').type('bob.kramer@hotmail.com');
        cy.get('[data-testid=password-input]').type('password');
        cy.get('[data-testid=login-submit]').click();
        cy.wait(1000);
        cy.get('[data-testid=category-button]').click();
      });
      it('is expected to show two articles', () => {
        cy.get('[data-testid=view-by-category]').within(() => {
          cy.get('[data-testid=article]').should('have.length', 2);
        });
      });
      it('is expected to show articles of science category', () => {
        cy.get('[data-testid=view-by-category]').within(() => {
          cy.get('[data-testid=category]').each(($span) => {
            expect($span.text()).to.equal('Science');
          });
        });
      });
    });
  });

  context('by navigating through side menu', () => {
    describe('Succesfully', () => {
      beforeEach(() => {
        cy.intercept(
          'GET',
          'https://fakest-newzz.herokuapp.com/api/articles/?category=**',
          {
            fixture: 'scienceCategories.json',
          }
        );
        cy.visit('/');
        cy.get('[data-testid=drawer-menu]').click();
        cy.contains('Categories').click();
      });

      it('is expected to redirect to Categories View', () => {
        cy.get('[data-testid=category]').should('have.length', 5);
        cy.get('[data-testid=category]').within(() => {
          cy.get('[data-testid=title]').should('contain', 'Science');
        });
      });

      it('is expected to show two articles in science category', () => {
        cy.get('[data-testid=category]').first().click();
        cy.get('[data-testid=view-by-category]').within(() => {
          cy.get('[data-testid=article]').should('have.length', 2);
        });
        cy.get('[data-testid=view-by-category]').within(() => {
          cy.get('[data-testid=category]').each(($span) => {
            expect($span.text()).to.equal('Science');
          });
        });
      });
    });

    describe('Unsuccesfully, no articles in category', () => {
      beforeEach(() => {
        cy.intercept(
          'GET',
          'https://fakest-newzz.herokuapp.com/api/articles/?category=**',
          {
            articles: [],
          }
        );
        cy.visit('/');
        cy.contains('Categories').click();
        cy.get('[data-testid=science-category]').click();
      });
      it('is expected to show no article message', () => {
        cy.get('[data-testid=no-articles-message]').should(
          'contain',
          'No articles available at this moment'
        );
      });
    });
  });
});
