import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './paciente';

@Injectable({
    providedIn: 'root'
})
export class PacienteService {
    private apiUrl = 'http://localhost:8080/api/pacientes';

    constructor(private http: HttpClient) {}

    registrarPaciente(paciente: Paciente): Observable<Paciente> {
        return this.http.post<Paciente>(`${this.apiUrl}/registrar`, paciente);
    }
    // Método para obtener la lista de pacientes
    getPacientes(): Observable<Paciente[]> {
        return this.http.get<Paciente[]>(`${this.apiUrl}/listar`); // Asegúrate de que esta URL sea la correcta
    }
    
    // Método para actualizar los datos de un paciente
    actualizarPacientes(paciente: Paciente): Observable<Paciente> {
        return this.http.put<Paciente>(`${this.apiUrl}/actualizar/${paciente.id}`, paciente);
    }
}