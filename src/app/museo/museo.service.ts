import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { MuseoDetail } from './museo-detail/museo-detail';
import { Museo } from './museo';
@Injectable({
  providedIn: 'root'
})
export class MuseoService {

  private apiUrl: string = environment.baseUrl + 'museums';

  constructor(private http: HttpClient) { }

  getMuseos(): Observable<MuseoDetail[]> {
    return this.http.get<MuseoDetail[]>(this.apiUrl);
  }

  getMuseo(id: string): Observable<MuseoDetail> {
    return this.http.get<MuseoDetail>(this.apiUrl + "/" + id);
  }

  createMuseo(artista: Museo): Observable<Museo> {
    return this.http.post<Museo>(this.apiUrl, artista).pipe(
      catchError(err => throwError(()=> new Error('Error en el servicio para crear museo')))
    );
}

}
