import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private apiUrl = 'http://localhost:8080/api/pacientes';

  constructor(private http: HttpClient) { }

  getPacientes(page: number, size: number, nombreFiltro: string): Observable<any>{
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    if (nombreFiltro){
      params = params.set('nombreFiltro', nombreFiltro);
    }
    return this.http.get<any>(`${this.apiUrl}/listar-pagina`, {params});
  }
}
