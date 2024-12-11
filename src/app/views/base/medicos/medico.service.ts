import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medico} from './medico';

@Injectable({
    providedIn: 'root'
})
export class MedicoService {

    private apiUrl = 'http://localhost:8080/api/medicos';

    constructor(private http: HttpClient) {}

    registrarMedico(medico: Medico): Observable<Medico> {
        return this.http.post<Medico>(`${this.apiUrl}/registrar`, medico);
    }
    // Método para obtener la lista de pacientes
    getMedicos(): Observable<Medico[]> {
        return this.http.get<Medico[]>(`${this.apiUrl}/listar`); // Asegúrate de que esta URL sea la correcta
    }

    // Método para actualizar los datos de un paciente
    actualizarMedicos(medico: Medico): Observable<Medico> {
        return this.http.put<Medico>(`${this.apiUrl}/actualizar/${medico.id}`, medico);
    }

}
