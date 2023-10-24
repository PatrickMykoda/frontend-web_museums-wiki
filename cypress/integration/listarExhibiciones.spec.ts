describe('Test para consultar el listado de exhibiciones', () => {

  it('Visits the project page Museolita', () => {
    cy.visit('/');
    cy.wait(1000);
  })

  it('Goes to the exhibition list', () => {
    cy.get('li[class="nav-item dropdown"]').contains('Exhibiciones').click();
    cy.wait(1000);
    cy.get('a[href="/exhibiciones/list"]').click();
    cy.wait(2000);
  })

  it('Checks that the exhibition list is not empty', () => {
    cy.get('dd[id="exhibition names"]').first().should('exist');
    cy.wait(1000);
  })
})
