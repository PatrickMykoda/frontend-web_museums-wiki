/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ObraDetailComponent } from './obra-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Artista } from 'src/app/artista/artista';
import { faker } from '@faker-js/faker';
import { ObraDetail } from '../obra-detail';

describe('ObraDetailComponent', () => {
  let component: ObraDetailComponent;
  let fixture: ComponentFixture<ObraDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ ObraDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObraDetailComponent);
    component = fixture.componentInstance;
    let debug: DebugElement;

    let artista = new Artista(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl()
    );

    component.obraDetail = new ObraDetail(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.name.firstName(),
      faker.image.imageUrl(),
      artista,
      []
    );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an img element ', () => {
    let debug: DebugElement;
    debug = fixture.debugElement;
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.obraDetail.name
    );
  });
});
