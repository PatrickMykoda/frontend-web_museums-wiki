import {faker} from '@faker-js/faker'

describe('Test negativo para crear un patrocinador - nombre demasiado corto', () => {

  it('Visits the project page Museolita', () => {
    cy.visit('/');
    cy.wait(1000);
  })

  it('Goes to the sponsor creation window', () => {
    cy.get('li[class="nav-item dropdown"]').contains('Patrocinador').click();
    cy.wait(1000);
    cy.get('a[href="/sponsors/create"]').click();
    cy.wait(2000);
  })

  it('Types the name of the sponsor', () => {
    cy.get('input[id="name"]').type(faker.random.alpha());
    cy.wait(1000);
  })

  it('Types the description of the sponsor', () => {
    cy.get('input[id="description"]').type(faker.lorem.paragraph());
    cy.wait(1000);
  })

  it('Types the website of the sponsor', () => {
    cy.get('input[id="website"]').type(faker.internet.url());
    cy.wait(1000);
  })

  it('Checks that the Create Button is disabled and the error message is visible', () => {
    cy.get('button[class="btn btn-primary"]').should('be.disabled');
    cy.get('div[class="alert alert-danger alert-dismissible fade show"]').contains('El nombre es demasiado corto!').should('be.visible');
    cy.wait(2000);
  })
})
