import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Sponsor } from './sponsor';
import { SponsorDetail } from './sponsor-detail';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {

private apiUrl: string = environment.baseUrl + 'sponsors';

constructor(private http: HttpClient) { }

getSponsors(): Observable<SponsorDetail[]> {
  return this.http.get<SponsorDetail[]>(this.apiUrl);
}

getSponsor(id: string): Observable<SponsorDetail> {
  return this.http.get<SponsorDetail>(this.apiUrl + "/" + id);
}

createSponsor(sponsor: Sponsor): Observable<Sponsor> {
  return this.http.post<Sponsor>(this.apiUrl, sponsor);
}

}
