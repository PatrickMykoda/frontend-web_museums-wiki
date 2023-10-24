let sponsorName = "";

describe('Test para consultar el detalle de un patrocinador', () => {

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

  it('Consults the details of the first sponsor', () => {
    cy.get('dd[id="sponsor names"]').first().invoke('text').then((text) => {
      sponsorName = text
    })
    cy.get('dd[id="sponsor names"]').first().click();
    cy.wait(1000);
  })

  it('Checks the name of the sponsor detail', () => {
    cy.get('p[class="h3 p-3"]').should('contain', sponsorName)
    cy.wait(1000);
  })
})
