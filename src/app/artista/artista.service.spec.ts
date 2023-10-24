/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArtistaService } from './artista.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('Service: Artista', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArtistaService]
    });
  });

  it('should ...', inject([ArtistaService], (service: ArtistaService) => {
    expect(service).toBeTruthy();
  }));

  class HttpClientMock {
    get = jasmine.createSpy('httpClient.get');
  }

  describe('ArtistaService', () => {
    let service: ArtistaService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          ArtistaService,
          {
            provide: HttpClient,
            useClass: HttpClientMock
          }
        ]
      });
      service = TestBed.get(ArtistaService);
    });

    it('should create', () => {
      expect(service).toBeTruthy();
    });
  });
});






