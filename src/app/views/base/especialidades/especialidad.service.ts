import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Especialidad } from './especialidad';

@Injectable({
    providedIn: 'root'
})
export class EspecialidadService {
    private apiUrl = 'http://localhost:8080/api/especialidad';

    constructor(private http: HttpClient) {}

    registrarEspecialidad(especialidad: Especialidad): Observable<Especialidad> {
        return this.http.post<Especialidad>(`${this.apiUrl}/registrar`, especialidad);
    }
    listarEspecialidad(): Observable<Especialidad[]> {
        return this.http.get<Especialidad[]>(`${this.apiUrl}/listar`); 
      }   
}