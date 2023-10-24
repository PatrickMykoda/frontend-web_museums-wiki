let movementName = "";

describe('Test para consultar el detalle de un movimiento', () => {

  it('Visits the project page Museolita', () => {
    cy.visit('/');
    cy.wait(1000);
  })

  it('Goes to the movement list', () => {
    cy.get('li[class="nav-item dropdown"]').contains('Movimientos').click();
    cy.wait(1000);
    cy.get('a[href="/movements/list"]').click();
    cy.wait(2000);
  })

  it('Consults the details of the first movement', () => {
    cy.get('dd[id="movement names"]').first().invoke('text').then((text) => {
      movementName = text
    })
    cy.get('dd[id="movement names"]').first().click();
    cy.wait(1000);
  })

  it('Checks the name of the movement detail', () => {
    cy.get('p[class="h3 p-3"]').should('contain', movementName)
    cy.wait(1000);
  })
})
