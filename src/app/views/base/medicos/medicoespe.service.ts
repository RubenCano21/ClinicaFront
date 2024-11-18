import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medico } from './medico';
import { MedicoEspecialidad } from './medicoespe';

@Injectable({
  providedIn: 'root'
})
export class MedicoEspecialidadService {

  private apiUrl = 'http://localhost:8080/api/medico-especialidad'; // Ruta de tu backend

  constructor(private http: HttpClient) {}

  createMedicoEspecialidad(medicoEspecialidad: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/asignar`, medicoEspecialidad);
  }

  listarMedicoEspecialidad(): Observable<MedicoEspecialidad[]> {
    return this.http.get<MedicoEspecialidad[]>(`${this.apiUrl}/listar`);
  }

  getMedicosEspecialidades(page: number, size: number, nombreFiltro: string): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    if (nombreFiltro){
      params = params.set('nombreFiltro', nombreFiltro);
    }
    return this.http.get<any>(`${this.apiUrl}/listar-pagina`, {params});
  }

  obtenerMedicosPorEspecialidad(especialidadId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/especialidad/${especialidadId}`);
  }


}
