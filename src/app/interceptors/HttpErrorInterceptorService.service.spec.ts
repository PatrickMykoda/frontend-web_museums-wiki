/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpErrorInterceptorService } from './HttpErrorInterceptorService.service';

describe('Service: HttpErrorInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      providers: [HttpErrorInterceptorService]
    });
  });

  it('should ...', inject([HttpErrorInterceptorService], (service: HttpErrorInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
