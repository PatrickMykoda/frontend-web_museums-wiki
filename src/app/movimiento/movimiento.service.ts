import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Movimiento } from './movimiento';
import { MovimientoDetail } from './movimiento-detail';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

private apiUrl: string = environment.baseUrl + 'movements';

constructor(private http: HttpClient) { }

getMovements(): Observable<MovimientoDetail[]> {
  return this.http.get<MovimientoDetail[]>(this.apiUrl);
}

getMovement(id: string): Observable<MovimientoDetail> {
  return this.http.get<MovimientoDetail>(this.apiUrl + "/" + id);
}

createMovement(movimiento: Movimiento): Observable<Movimiento> {
  return this.http.post<Movimiento>(this.apiUrl, movimiento);
}

}
