/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MuseoDetailComponent } from './museo-detail.component';
import { faker } from '@faker-js/faker';
import { MuseoDetail } from './museo-detail';
import { Obra } from 'src/app/obra/obra';
import { Exhibicion } from 'src/app/exhibicion/exhibicion';
import { Artista } from 'src/app/artista/artista';
import { RouterTestingModule } from '@angular/router/testing';


describe('MuseoDetailComponent', () => {
  let component: MuseoDetailComponent;
  let fixture: ComponentFixture<MuseoDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ MuseoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseoDetailComponent);
    component = fixture.componentInstance;

    let artista = new Artista(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl()
    );

    let obra = new Obra(
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

    component.museoDetail =
      new MuseoDetail(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.lorem.sentence(),
        faker.address.streetAddress(),
        faker.address.city(),
        faker.image.business(),
        [obra],
        [exhibicionUno],
      );
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an img element ', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.museoDetail.name
    );
  });
});
