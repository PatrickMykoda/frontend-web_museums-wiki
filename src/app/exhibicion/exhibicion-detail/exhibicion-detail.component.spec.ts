/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Sponsor } from 'src/app/sponsor/sponsor';
import { Museo } from 'src/app/museo/museo';
import { ObraDetail } from 'src/app/obra/obra-detail';
import { ExhibicionDetail } from '../exhibicion-detail';
import { ExhibicionDetailComponent } from './exhibicion-detail.component';
import { Artista } from 'src/app/artista/artista';

describe('ExhibicionDetailComponent', () => {
  let component: ExhibicionDetailComponent;
  let fixture: ComponentFixture<ExhibicionDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibicionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibicionDetailComponent);
    component = fixture.componentInstance;

    let sponsor = new Sponsor(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.lorem.sentence(),
      faker.internet.exampleEmail()
    );

    let artista = new Artista(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl()
    );

    let obra1 = new ObraDetail(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.name.firstName(),
      faker.image.imageUrl(),
      artista,
      []
    );

    let obra2 = new ObraDetail(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.name.firstName(),
      faker.image.imageUrl(),
      artista,
      []
    );

    let museum = new Museo(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.lorem.sentence(),
      faker.address.streetAddress(),
      faker.name.firstName(),
      faker.image.imageUrl(),
      [obra1, obra2],
      []
    );

    component.exhibicionDetail =
      new ExhibicionDetail(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.lorem.sentence(),
        sponsor,
        museum,
        [obra1, obra2]
      );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('should have a name', () => {
    const title = fixture.debugElement.query(By.css('header')).nativeElement;
    expect(title.innerHTML).toEqual(component.exhibicionDetail.name);
  });*/

});

