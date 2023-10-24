describe('Test para consultar el listado de movimientos', () => {

  it('Visits the project page Museolita', () => {
    cy.visit('/');
    cy.wait(1000);
  })

  it('Goes to the movements list', () => {
    cy.get('li[class="nav-item dropdown"]').contains('Movimientos').click();
    cy.wait(1000);
    cy.get('a[href="/movements/list"]').click();
    cy.wait(2000);
  })

  it('Checks that the movement list is not empty', () => {
    cy.get('dd[id="movement names"]').first().should('exist');
    cy.wait(1000);
  })
})
