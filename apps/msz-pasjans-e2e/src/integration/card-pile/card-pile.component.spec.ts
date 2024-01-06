describe('msz-pasjans', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardpilecomponent--primary&args=cards;'));
  it('should render the component', () => {
    cy.get('app-card-pile').should('exist');
  });
});