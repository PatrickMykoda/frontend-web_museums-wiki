describe('Test para consultar el listado de patrocinadores', () => {

  it('Visits the project page Museolita', () => {
    cy.visit('/');
    cy.wait(1000);
  })

  it('Goes to the sponsor list', () => {
    cy.get('li[class="nav-item dropdown"]').contains('Patrocinadores').click();
    cy.wait(1000);
    cy.get('a[href="/sponsors/list"]').click();
    cy.wait(2000);
  })

  it('Checks that the sponsor list is not empty', () => {
    cy.get('dd[id="sponsor names"]').first().should('exist');
    cy.wait(1000);
  })
})
