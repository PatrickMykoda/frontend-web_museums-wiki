/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ArtistaDetailComponent } from './artista-detail.component';
import { Movimiento } from 'src/app/movimiento/movimiento';
import faker from '@faker-js/faker';
import { Obra } from 'src/app/obra/obra';
import { ArtistaDetail } from './artista-detail';
import { Artista } from '../artista';

describe('ArtistaDetailComponent', () => {
  let component: ArtistaDetailComponent;
  let fixture: ComponentFixture<ArtistaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ ArtistaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistaDetailComponent);
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

    component.artistaDetail =
      new ArtistaDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        [movimiento1,movimiento2],
        [obra1]
      );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
