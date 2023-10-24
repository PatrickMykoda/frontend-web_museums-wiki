/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ObraListComponent } from './obra-list.component';
import { faker } from '@faker-js/faker';
import { Artista } from 'src/app/artista/artista';
import { ObraService } from '../obra.service';
import { ObraDetail } from '../obra-detail';

describe('ObraListComponent', () => {
  let component: ObraListComponent;
  let fixture: ComponentFixture<ObraListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ObraListComponent ],
      providers: [ObraService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObraListComponent);
    component = fixture.componentInstance;

    let artista = new Artista(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
    )

    component.obras = [
      new ObraDetail(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.name.firstName(),
        faker.image.imageUrl(),
        artista,
        []
      ),
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
