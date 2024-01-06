describe('msz-pasjans', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardcomponent--primary&args=uncovered:false;name;'));
  it('should render the component', () => {
    cy.get('app-card').should('exist');
  });
});