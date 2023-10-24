let artworkName = "";

describe('Test para consultar el detalle de una obra', () => {

  it('Visits the project page Museolita', () => {
    cy.visit('/');
    cy.wait(1000);
  })

  it('Goes to the artwork list', () => {
    cy.get('li[class="nav-item dropdown"]').contains('Obras').click();
    cy.wait(1000);
    cy.get('a[href="/artworks/list"]').click();
    cy.wait(1000);
  })

  it('Consults the details of the first artwork', () => {
    cy.get('dd[id="artwork names"]').first().invoke('text').then((text) => {
      artworkName = text
    })
    cy.get('dd[id="artwork names"]').first().click();
    cy.wait(2000);
  })

  it('Checks the name of the detailed artwork', () => {
    cy.get('p[class="h3 p-3"]').should('contain', artworkName)
    cy.wait(1000);
  })
})
