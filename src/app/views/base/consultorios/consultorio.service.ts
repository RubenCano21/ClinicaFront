import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consultorio } from './consultorio';

@Injectable({
    providedIn: 'root'
})
export class ConsultorioService {
    private apiUrl = 'http://localhost:8080/api/consultorios';

    constructor(private http: HttpClient) {}

    registrarConsultorio(consultorio: Consultorio): Observable<Consultorio> {
        return this.http.post<Consultorio>(`${this.apiUrl}/registrar`, consultorio);
    }
    
    listarConsultorios(): Observable<Consultorio[]> {
        return this.http.get<Consultorio[]>(`${this.apiUrl}/listar`); 
      }   
}