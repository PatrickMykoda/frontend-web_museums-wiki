/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ArtistaListComponent } from './artista-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtistaService } from '../artista.service';
import { Movimiento } from 'src/app/movimiento/movimiento';
import { Artista } from '../artista';
import { Obra } from 'src/app/obra/obra';
import { ArtistaDetail } from '../artista-detail/artista-detail';

describe('ArtistaListComponent', () => {
  let component: ArtistaListComponent;
  let fixture: ComponentFixture<ArtistaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ArtistaListComponent ],
      providers: [ ArtistaService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistaListComponent);
    component = fixture.componentInstance;

    let movimiento1 = new Movimiento(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    );

    let movimiento2 = new Movimiento(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    );

    let artista = new Artista(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl()
    );

    let obra1 = new Obra(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.name.firstName(),
      faker.image.imageUrl(),
      artista
    );

    component.artistas = [
      new ArtistaDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        [movimiento1,movimiento2],
        [obra1]
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two rows ', () => {
    const tr = debug.queryAll(By.css('tr'));
    expect(tr.length).toBe(2);
  });

});
