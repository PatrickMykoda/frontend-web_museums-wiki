import {faker} from '@faker-js/faker'

let artistName = faker.random.word();

describe('Test para crear un artista', () => {

  it('Visits the project page Museolita', () => {
    cy.visit('/');
    cy.wait(1000);
  })

  it('Goes to the create museum', () => {
    cy.get('li[class="nav-item dropdown"]').contains('Artista').click();
    cy.wait(1000);
    cy.get('a[href="/artists/create"]').click();
    cy.wait(2000);
  })

  it('Types the name of the artist', () => {
    cy.get('input[id="name"]').type(artistName);
    cy.wait(1000);
  })

  it('Types the artist date of birth', () => {
    cy.get('input[id="birthdate"]').type(faker.random.numeric());
    cy.wait(1000);
  })

  it('Types the artist place of birth', () => {
    cy.get('input[id="birthplace"]').type(faker.address.county());
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

  it('Goes to the artist list', () =>{
    cy.get('li[class="nav-item dropdown"]').contains('Artista').click();
    cy.wait(1000);
    cy.get('a[href="/artists/list"]').click();
    cy.wait(2000);
  })

  it('Checks that the new artist is included in the list', () => {
    cy.get('dd[class="artistsNames"]').contains(artistName).should('exist');
  })
})
