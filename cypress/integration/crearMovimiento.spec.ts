import {faker} from '@faker-js/faker'

let movementName = faker.random.word();

describe('Test para crear un movimiento', () => {

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

  it('Types the name of the movement', () => {
    cy.get('input[id="name"]').type(movementName);
    cy.wait(1000);
  })

  it('Types the description of the movement', () => {
    cy.get('input[id="description"]').type(faker.lorem.paragraph());
    cy.wait(1000);
  })

  it('Types the country of origin', () => {
    cy.get('input[id="countryOfOrigin"]').type(faker.address.county());
    cy.wait(1000);
  })

  it('Types the active years', () => {
    cy.get('input[id="activeYears"]').type(faker.lorem.sentence(3));
    cy.wait(1000);
  })

  it('Saves the new movement', () => {
    cy.get('button[class="btn btn-primary"]').click();
    cy.wait(2000);
  })

  it('Goes to the movment list', () =>{
    cy.get('li[class="nav-item dropdown"]').contains('Movimientos').click();
    cy.wait(1000);
    cy.get('a[href="/movements/list"]').click();
    cy.wait(2000);
  })

  it('Checks that the new movement is included in the list', () => {
    cy.get('dd[id="movement names"]').contains(movementName).should('exist');
  })
})
