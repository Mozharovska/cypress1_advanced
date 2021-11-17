let user;

describe('Your Second Test', () => {
    before(function () {
        cy.task("freshUser").then((object) => {
            user = object;
        });
    });

    it('Sign up with faker', () => {
      cy.visit('https://react-redux.realworld.io/#/register?_k=t8b0if');
      cy.get('[placeholder="Username"]').type(user.username);
      cy.get('[placeholder="Email"]').type(user.email);
      cy.get('[placeholder="Password"]').type(user.password);
      cy.get('.btn').click();
      cy.get('.nav-link').should('contain', user.username)
    })
  });
