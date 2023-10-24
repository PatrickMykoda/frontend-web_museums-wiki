let museumsNames = "";

describe('Test para consultar el detalle de un museo', () => {

  it('Visits the project page Museolita', () => {
    cy.visit('/');
    cy.wait(1000);
  })

  it('Goes to the exhibition list', () => {
    cy.get('li[class="nav-item dropdown"]').contains('Museo').click();
    cy.wait(1000);
    cy.get('a[href="/museums/list"]').click();
    cy.wait(2000);
  })

  it('Consults the details of the first museum', () => {
    cy.get('dd[class="museumsNames"]').first().invoke('text').then((text) => {
      museumsNames = text
    })
    cy.get('dd[class="museumsNames"]').first().click();
    cy.wait(1000);
  })

  it('Checks the name of the museum detail', () => {
    cy.get('p[class="h3 p-3"]').should('contain', museumsNames)
    cy.wait(1000);
  })
})
