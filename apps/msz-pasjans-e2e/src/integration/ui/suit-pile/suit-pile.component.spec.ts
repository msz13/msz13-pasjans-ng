describe('msz-pasjans', () => {
  beforeEach(() => cy.visit('/iframe.html?id=suitpilecomponent--primary'));
  it('should render the component', () => {
    cy.get('msz-pasjans-suit-pile').should('exist');
  });
});