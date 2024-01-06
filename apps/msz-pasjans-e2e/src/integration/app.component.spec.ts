describe('msz-pasjans', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('msz-pasjans-root').should('exist');
  });
});