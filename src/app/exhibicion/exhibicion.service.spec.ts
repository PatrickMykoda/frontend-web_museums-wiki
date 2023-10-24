/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExhibicionService } from './exhibicion.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('Service: Exhibicion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExhibicionService]
    });
  });

  it('should ...', inject([ExhibicionService], (service: ExhibicionService) => {
    expect(service).toBeTruthy();
  }));

  class HttpClientMock {
    get = jasmine.createSpy('httpClient.get');
  }

  describe('ExhibicionService', () => {
    let service: ExhibicionService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          ExhibicionService,
          {
            provide: HttpClient,
            useClass: HttpClientMock
          }
        ]
      });
      service = TestBed.get(ExhibicionService);
    });

    it('should create', () => {
      expect(service).toBeTruthy();
    });
  });
});
