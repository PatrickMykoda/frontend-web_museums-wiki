/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ObraService } from './obra.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('Service: Obra', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ObraService]
    });
  });

  it('should ...', inject([ObraService], (service: ObraService) => {
    expect(service).toBeTruthy();
  }));

  class HttpClientMock {
    get = jasmine.createSpy('httpClient.get');
  }

  describe('ObraService', () => {
    let service: ObraService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          ObraService,
          {
            provide: HttpClient,
            useClass: HttpClientMock
          }
        ]
      });
      service = TestBed.get(ObraService);
    });

    it('should create', () => {
      expect(service).toBeTruthy();
    });
  });
});
