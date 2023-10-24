import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { Obra } from './obra';
import { ObraDetail } from './obra-detail';

@Injectable({
  providedIn: 'root'
})
export class ObraService {

  private apiUrl: string = environment.baseUrl + 'artworks';
  private createUrl: string = environment.baseUrl + 'artists';
  constructor(private http: HttpClient) { }

  getObras(): Observable<ObraDetail[]>{
    return this.http.get<ObraDetail[]>(this.apiUrl).pipe(
      catchError(err => throwError(()=> new Error('Error en el servicio para obtener obras')))
    );
  }

  getObra(id: string): Observable<ObraDetail> {
    return this.http.get<ObraDetail>(this.apiUrl + "/" + id).pipe(
      catchError(err => throwError(()=> new Error('Error en el servicio para obtener una obra por id')))
    );
  }

  createObra(artistaId:string,obra: Obra): Observable<Obra> {
    return this.http.post<Obra>(this.createUrl+"/"+artistaId+"/artworks", obra).pipe(
      catchError(err => throwError(()=> new Error('Error en el servicio para crear obra')))
    );
 }

}
