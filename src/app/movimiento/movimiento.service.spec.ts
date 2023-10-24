/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovimientoService } from './movimiento.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Movimiento', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovimientoService]
    });
  });

  it('should ...', inject([MovimientoService], (service: MovimientoService) => {
    expect(service).toBeTruthy();
  }));
});
