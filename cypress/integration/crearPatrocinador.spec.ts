import {faker} from '@faker-js/faker'

let sponsorName = faker.random.word();

describe('Test para crear un patrocinador', () => {

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

  it('Goes to the sponsor list', () =>{
    cy.get('li[class="nav-item dropdown"]').contains('Patrocinadores').click();
    cy.wait(1000);
    cy.get('a[href="/sponsors/list"]').click();
    cy.wait(1000);
  })

  it('Checks that the new sponsor is included in the list', () => {
    cy.get('dd[id="sponsor names"]').contains(sponsorName).should('exist');
    cy.wait(1000);
  })
})
