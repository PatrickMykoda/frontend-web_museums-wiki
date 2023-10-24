let exhibitionName = "";

describe('Test para consultar el detalle de una exhibicion', () => {

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

  it('Consults the details of the first exhibition', () => {
    cy.get('dd[id="exhibition names"]').first().invoke('text').then((text) => {
      exhibitionName = text
    })
    cy.get('dd[id="exhibition names"]').first().click();
    cy.wait(1000);
  })

  it('Checks the name of the detailed exhibition', () => {
    cy.get('p[class="h3 p-3"]').should('contain', exhibitionName)
    cy.wait(1000);
  })
})
