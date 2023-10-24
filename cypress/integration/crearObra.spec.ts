import {faker} from '@faker-js/faker'

let artworkName = faker.random.word();

describe('Test para crear una obra', () => {

  it('Visits the project page Museolita', () => {
    cy.visit('/');
    cy.wait(1000);
  })

  it('Goes to the create artwork', () => {
    cy.get('li[class="nav-item dropdown"]').contains('Obras').click();
    cy.wait(1000);
    cy.get('a[href="/artworks/create"]').click();
    cy.wait(2000);
  })

  it('Types the name of the artwork', () => {
    cy.get('input[id="name"]').type(artworkName);
    cy.wait(1000);
  })

  it('Types the description of the artwork', () => {
    cy.get('input[id="description"]').type(faker.lorem.paragraph());
    cy.wait(1000);
  })

  it('Types the year of the artwork', () => {
    cy.get('input[id="year"]').type(faker.random.numeric());
    cy.wait(1000);
  })

  it('Select the type', () => {
    cy.get('select[id="type"]').select("Pintura").should('have.value', 'Painting');
    cy.wait(1000);
  })

  it('Select the artist', () => {
    cy.get('select[id="artist"]').select("David Bomberg").should('have.value', '106');
    cy.wait(1000);
  })

  it('Saves the new artwork', () => {
    cy.get('button[class="btn btn-primary"]').click();
    cy.wait(2000);
  })

  it('Goes to the artwork list', () =>{
    cy.get('li[class="nav-item dropdown"]').contains('Obras').click();
    cy.wait(1000);
    cy.get('a[href="/artworks/list"]').click();
    cy.wait(2000);
  })

  it('Checks that the new artwork is included in the list', () => {
    cy.get('dd[id="artwork names"]').contains(artworkName).should('exist');
  })
})
