import {faker} from '@faker-js/faker'

let museumName = faker.random.word();

describe('Test para crear un museo', () => {

  it('Visits the project page Museolita', () => {
    cy.visit('/');
    cy.wait(1000);
  })

  it('Goes to the create museum', () => {
    cy.get('li[class="nav-item dropdown"]').contains('Museo').click();
    cy.wait(1000);
    cy.get('a[href="/museums/create"]').click();
    cy.wait(2000);
  })

  it('Types the name of the museum', () => {
    cy.get('input[id="name"]').type(museumName);
    cy.wait(1000);
  })

  it('Types the description of the museum', () => {
    cy.get('input[id="description"]').type(faker.lorem.paragraph());
    cy.wait(1000);
  })

  it('Types the adress of the museum', () => {
    cy.get('input[id="address"]').type(faker.address.county());
    cy.wait(1000);
  })

  it('Types the city where the museum is located', () => {
    cy.get('input[id="city"]').type(faker.address.cityName());
    cy.wait(1000);
  })

  it('Types the image url', () => {
    cy.get('input[id="image"]').type(faker.image.imageUrl());
    cy.wait(1000);
  })

  it('Saves the new movement', () => {
    cy.get('button[class="btn btn-primary"]').click();
    cy.wait(2000);
  })

  it('Goes to the museum list', () =>{
    cy.get('li[class="nav-item dropdown"]').contains('Museo').click();
    cy.wait(1000);
    cy.get('a[href="/museums/list"]').click();
    cy.wait(2000);
  })

  it('Checks that the new museum is included in the list', () => {
    cy.get('dd[class="museumsNames"]').contains(museumName).should('exist');
  })
})
