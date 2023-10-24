/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { MuseoListComponent } from './museo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MuseoService } from '../museo.service';
import { Museo } from '../museo';
import { Obra } from 'src/app/obra/obra';
import { Exhibicion } from 'src/app/exhibicion/exhibicion';
import { Artista } from 'src/app/artista/artista';

describe('MuseoListComponent', () => {
  let component: MuseoListComponent;
  let fixture: ComponentFixture<MuseoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ MuseoListComponent ],
      providers: [ MuseoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseoListComponent);
    component = fixture.componentInstance;

    let artista = new Artista(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl()
    );

    let obraUno = new Obra(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.name.firstName(),
      faker.image.imageUrl(),
      artista
    );

    let exhibicionUno = new Exhibicion(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.lorem.sentence()
    );

    component.museos = [
      new Museo(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.lorem.sentence(),
        faker.address.streetAddress(),
        faker.address.city(),
        faker.image.business(),
        [obraUno],
        [exhibicionUno],
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Component has a table", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });

});
