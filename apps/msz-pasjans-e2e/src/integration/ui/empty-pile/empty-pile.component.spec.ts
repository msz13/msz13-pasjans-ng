describe('msz-pasjans', () => {
  beforeEach(() => cy.visit('/iframe.html?id=emptypilecomponent--primary'));
  it('should render the component', () => {
    cy.get('msz-pasjans-empty-pile').should('exist');
  });
});