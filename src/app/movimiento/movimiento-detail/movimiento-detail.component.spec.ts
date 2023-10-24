/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { MovimientoDetailComponent } from './movimiento-detail.component';
import { MovimientoDetail } from '../movimiento-detail';
import { Artista } from 'src/app/artista/artista';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('MovimientoDetailComponent', () => {
  let component: MovimientoDetailComponent;
  let fixture: ComponentFixture<MovimientoDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ MovimientoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientoDetailComponent);
    component = fixture.componentInstance;

    let artista = new Artista(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl()
    );

    component.movimientoDetail = new MovimientoDetail(
      faker.datatype.number(),
      faker.random.word(),
      faker.lorem.sentence(),
      faker.address.country(),
      faker.random.word(),
      [artista]
    )

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
