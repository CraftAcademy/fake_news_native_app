describe('User can navigate to backyard articles', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
  });

  describe('Successfully', () => {
    before(() => {
      cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/backyards', {
        backyard_articles: [],
      });
      cy.visit('/', {
        onBeforeLoad(window) {
          const stubLocation = {
            coords: {
              latitude: 55.7842,
              longitude: 12.4518,
            },
          };
          cy.stub(window.navigator.geolocation, 'getCurrentPosition').callsFake(
            (callback) => {
              return callback(stubLocation);
            }
          );
        },
      });
      cy.get('[data-testid=drawer-menu]').click();
      cy.contains('Backyard Articles').click();
    });
    it('is expected to display the country', () => {
      cy.get('[data-testid=backyard-header]').should(
        'contain',
        'Backyard Articles from Denmark'
      );
    });

    it('is expected to show the list of articles', () => {
      cy.get('[data-testid=backyard-article]').should('have.length', 2);
    });
  });

  describe('Unseccesfilly, no geolocation', () => {
    before(() => {
      cy.visit('/', {
        onBeforeLoad(window) {
          const stubLocation = {
            coords: { latitude: null, longitude: null },
          };
          cy.stub(window.navigator.geolocation, 'getCurrentPosition').callsFake(
            (callback) => {
              return callback(stubLocation);
            }
          );
        },
      });
      cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/backyards', {
        backyard_articles: [],
      });
      cy.get('[data-testid=drawer-menu]').click();
      cy.contains('Backyard Articles').click();
    });
    it('is expected to display no articles message', () => {
      cy.get('[data-testid=no-location-message]').should(
        'contain',
        'Please share your location to get access to your backyard'
      );
    });
  });
});
