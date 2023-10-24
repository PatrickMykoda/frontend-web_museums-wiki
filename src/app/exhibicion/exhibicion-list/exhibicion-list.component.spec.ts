/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { ExhibicionMuseoDetail } from '../exhibicion-museo-detail';
import { ExhibicionListComponent } from './exhibicion-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ExhibicionService } from '../exhibicion.service';
import { ExhibicionDetail } from '../exhibicion-detail';
import { Sponsor } from 'src/app/sponsor/sponsor';
import { Museo } from 'src/app/museo/museo';
import { ObraDetail } from 'src/app/obra/obra-detail';
import { Artista } from 'src/app/artista/artista';

describe('ExhibicionListComponent', () => {
  let component: ExhibicionListComponent;
  let fixture: ComponentFixture<ExhibicionListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ExhibicionListComponent ],
      providers: [ ExhibicionService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibicionListComponent);
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

    let exhibicion =
      new ExhibicionDetail(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.lorem.sentence(),
        sponsor,
        museum,
        [obra1, obra2]
      );

    component.museumsOfExhibitions = [
      new ExhibicionMuseoDetail(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.lorem.sentence(),
        faker.address.streetAddress(),
        faker.address.city(),
        faker.image.business(),
        [obra1, obra2],
        [exhibicion],
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
