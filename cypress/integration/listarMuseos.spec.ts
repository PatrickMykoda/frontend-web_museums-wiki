describe('Test para consultar el listado de museos', () => {

  it('Visits the project page Museolita', () => {
    cy.visit('/');
    cy.wait(1000);
  })

  it('Goes to the museum list', () => {
    cy.get('li[class="nav-item dropdown"]').contains('Museo').click();
    cy.wait(1000);
    cy.get('a[href="/museums/list"]').click();
    cy.wait(2000);
  })

  it('Checks that the museum list is not empty', () => {
    cy.get('dd[class="museumsNames"]').first().should('exist');
    cy.wait(1000);
  })
})
