import {faker} from '@faker-js/faker'

let exhibitionName = faker.random.word();
let sponsorName = faker.random.word();


describe('Test para crear un exhibición', () => {

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
    cy.get('input[id="name"]').type(sponsorName);
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

  it('Saves the new sponsor', () => {
    cy.get('button[class="btn btn-primary"]').click();
    cy.wait(2000);
  })
  it('Goes to the create exhibition', () => {
    cy.get('li[class="nav-item dropdown"]').contains('Exhibiciones').click();
    cy.wait(1000);
    cy.get('a[href="/exhibiciones/create"]').click();
    cy.wait(2000);
  })

  it('Types the name of the exhibition', () => {
    cy.get('input[id="name"]').type(exhibitionName);
    cy.wait(1000);
  })

  it('Types the description of the exhibition', () => {
    cy.get('input[id="description"]').type(faker.lorem.paragraph());
    cy.wait(1000);
  })

  it('Selects the sponsor', () => {
    cy.get('select[id="sponsor"]').select(sponsorName);
    cy.wait(1000);
  })

  it('Selects the museum', () => {
    cy.get('select[id="museum"]').select("Bendigo Art Gallery").should('have.value', '100');
    cy.wait(1000);
  })

  it('Saves the new exhibition', () => {
    cy.get('button[class="btn btn-primary"]').click();
    cy.wait(2000);
  })

  it('Goes to the exhibition list', () =>{
    cy.get('li[class="nav-item dropdown"]').contains('Exhibiciones').click();
    cy.wait(1000);
    cy.get('a[href="/exhibiciones/list"]').click();
    cy.wait(2000);
  })

  it('Checks that the new exhibition is included in the list', () => {
    cy.get('dd[id="exhibition names"]').contains(exhibitionName).should('exist');
  })
})
