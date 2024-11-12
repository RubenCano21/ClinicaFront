import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  
}
