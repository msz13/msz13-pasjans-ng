describe('msz-pasjans', () => {
  beforeEach(() => cy.visit('/iframe.html?id=soltairetablecomponent--primary&args=table;'));
  it('should render the component', () => {
    cy.get('msz-pasjans-soltaire-table').should('exist');
  });
});