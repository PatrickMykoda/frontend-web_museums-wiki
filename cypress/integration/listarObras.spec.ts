describe('Test para consultar el listado de obras', () => {

  it('Visits the project page Museolita', () => {
    cy.visit('/');
    cy.wait(1000);
  })

  it('Goes to the artwork list', () => {
    cy.get('li[class="nav-item dropdown"]').contains('Obras').click();
    cy.wait(1000);
    cy.get('a[href="/artworks/list"]').click();
    cy.wait(2000);
  })

  it('Checks that the artwork list is not empty', () => {
    cy.get('dd[id="artwork names"]').first().should('exist');
    cy.wait(1000);
  })
})
