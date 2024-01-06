describe('msz-pasjans', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dndtestcomponent--primary'));
  it('should render the component', () => {
    cy.get('msz-pasjans-dnd-test').should('exist');
  });
});