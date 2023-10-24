describe('Test para consultar el listado de artistas', () => {

  it('Visits the project page Museolita', () => {
    cy.visit('/');
    cy.wait(1000);
  })

  it('Goes to the museum list', () => {
    cy.get('li[class="nav-item dropdown"]').contains('Artista').click();
    cy.wait(1000);
    cy.get('a[href="/artists/list"]').click();
    cy.wait(2000);
  })

  it('Checks that the artist list is not empty', () => {
    cy.get('dd[class="artistsNames"]').first().should('exist');
    cy.wait(1000);
  })
})
