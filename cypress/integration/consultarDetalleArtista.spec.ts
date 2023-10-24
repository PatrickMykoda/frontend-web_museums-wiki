let artistName = "";

describe('Test para consultar el detalle de un artista', () => {

  it('Visits the project page Museolita', () => {
    cy.visit('/');
    cy.wait(1000);
  })

  it('Goes to the artist list', () => {
    cy.get('li[class="nav-item dropdown"]').contains('Artista').click();
    cy.wait(1000);
    cy.get('a[href="/artists/list"]').click();
    cy.wait(2000);
  })

  it('Consults the details of the first artist', () => {
    cy.get('dd[class="artistsNames"]').first().invoke('text').then((text) => {
      artistName = text
    })
    cy.get('dd[class="artistsNames"]').first().click();
    cy.wait(1000);
  })

  it('Checks the name of the artist detail', () => {
    cy.get('p[class="h3 p-3"]').should('contain', artistName)
    cy.wait(1000);
  })
})
