/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MuseoService } from './museo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('Service: Museo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MuseoService]
    });
  });

  it('should ...', inject([MuseoService], (service: MuseoService) => {
    expect(service).toBeTruthy();
  }));

  class HttpClientMock {
    get = jasmine.createSpy('httpClient.get');
  }

  describe('MuseoService', () => {
    let service: MuseoService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          MuseoService,
          {
            provide: HttpClient,
            useClass: HttpClientMock
          }
        ]
      });
      service = TestBed.get(MuseoService);
    });

    it('should create', () => {
      expect(service).toBeTruthy();
    });
  });
});
