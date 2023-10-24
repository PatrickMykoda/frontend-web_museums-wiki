import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { Artista } from './artista';
import { ArtistaDetail } from './artista-detail/artista-detail';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {
  private apiUrl: string = environment.baseUrl + 'artists';
  constructor(private http: HttpClient) { }

  getArtistas(): Observable<ArtistaDetail[]> {
    return this.http.get<ArtistaDetail[]>(this.apiUrl).pipe(
      catchError(err => throwError(()=> new Error('Error en el servicio para obtener artistas')))
    );
  }

  getArtista(id: string): Observable<ArtistaDetail> {
    return this.http.get<ArtistaDetail>(this.apiUrl + "/" + id).pipe(
      catchError(err => throwError(()=> new Error('Error en el servicio para obtener un artista por id')))
    );
  }

  createArtista(artista: Artista): Observable<Artista> {
    return this.http.post<Artista>(this.apiUrl, artista).pipe(
      catchError(err => throwError(()=> new Error('Error en el servicio para crear artistas')))
    );
 }

}
