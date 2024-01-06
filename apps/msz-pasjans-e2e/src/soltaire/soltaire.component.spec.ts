describe('msz-pasjans', () => {
  beforeEach(() => cy.visit('/iframe.html?id=soltairecomponent--primary'));
  it('should render the component', () => {
    cy.get('msz-pasjans-soltaire').should('exist');
  });
});