describe('Smoke Test', () => {
  it('Makes sure the login button comes up', () => {
    cy.visit('/');
    cy.findByText('Login');
  });
});
