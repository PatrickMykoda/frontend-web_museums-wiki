/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { SponsorDetailComponent } from './sponsor-detail.component';
import { faker } from '@faker-js/faker';
import { SponsorDetail } from '../sponsor-detail';
import { Exhibicion } from 'src/app/exhibicion/exhibicion';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('SponsorDetailComponent', () => {
  let component: SponsorDetailComponent;
  let fixture: ComponentFixture<SponsorDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ SponsorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorDetailComponent);
    component = fixture.componentInstance;

    let exhibition = new Exhibicion(
      faker.datatype.number(),
      faker.random.word(),
      faker.lorem.sentence(),
    )

    component.sponsorDetail= new SponsorDetail(
        faker.datatype.number(),
        faker.random.word(),
        faker.lorem.sentence(),
        faker.internet.url(),
        [exhibition],
      );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
