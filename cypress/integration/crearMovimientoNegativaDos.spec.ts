import {faker} from '@faker-js/faker'

describe('Test negativo para crear una exhibicion - nombre del país demasiado largo', () => {

  it('Visits the project page Museolita', () => {
    cy.visit('/');
    cy.wait(1000);
  })

  it('Goes to the movement creation window', () => {
    cy.get('li[class="nav-item dropdown"]').contains('Movimientos').click();
    cy.wait(1000);
    cy.get('a[href="/movements/create"]').click();
    cy.wait(2000);
  })

  it('Types too short name of the movement', () => {
    cy.get('input[id="name"]').type(faker.random.word());
    cy.wait(1000);
  })

  it('Types the description of the movement', () => {
    cy.get('input[id="description"]').type(faker.lorem.paragraph());
    cy.wait(1000);
  })

  it('Types the country of origin', () => {
    cy.get('input[id="countryOfOrigin"]').type(faker.random.alpha(101));
    cy.wait(1000);
  })

  it('Types the active years', () => {
    cy.get('input[id="activeYears"]').type(faker.lorem.sentence(3));
    cy.wait(1000);
  })

  it('Checks that the Create Button is disabled and the error message is visible', () => {
    cy.get('button[class="btn btn-primary"]').should('be.disabled');
    cy.get('div[class="alert alert-danger alert-dismissible fade show"]').contains('El nombre del país es demasiado largo').should('be.visible');
    cy.wait(2000);
  })
})
