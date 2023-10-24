import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { ExhibicionMuseoDetail } from './exhibicion-museo-detail';
import { ExhibicionDetail } from './exhibicion-detail';

@Injectable({
  providedIn: 'root'
})
export class ExhibicionService {

  private apiUrl: string = environment.baseUrl + 'museums';
  constructor(private http: HttpClient) { }

  getExhibitions():Observable<ExhibicionMuseoDetail[]> {
    return this.http.get<ExhibicionMuseoDetail[]>(this.apiUrl)
  }

  createExhibicion(museumId:string, exhibicion: ExhibicionDetail): Observable<ExhibicionDetail> {
    exhibicion.sponsor = { id: exhibicion.sponsor};
    return this.http.post<ExhibicionDetail>(this.apiUrl + "/" + museumId + "/exhibitions", exhibicion).pipe(
      catchError(err => throwError(()=> new Error('Error en el servicio para crear Exhibiciones')))
    );
}

}

