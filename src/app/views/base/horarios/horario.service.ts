import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Horario } from './horario';

@Injectable({
    providedIn: 'root'
})
export class HorarioService {
    private apiUrl = 'http://localhost:8080/api/horarios'; 

    constructor(private http: HttpClient) {}

   
    registrarHorario(horario: Horario): Observable<Horario> {
        return this.http.post<Horario>(`${this.apiUrl}/registrar`, horario);
    }
    listarHorario(): Observable<Horario[]> {
        return this.http.get<Horario[]>(`${this.apiUrl}/listar`); 
      }   
}