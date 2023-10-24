/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SponsorService } from './sponsor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Sponsor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SponsorService]
    });
  });

  it('should ...', inject([SponsorService], (service: SponsorService) => {
    expect(service).toBeTruthy();
  }));
});
