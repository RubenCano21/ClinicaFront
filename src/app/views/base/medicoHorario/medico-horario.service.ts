import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MedicoHorario} from "./medico-horario";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MedicoHorarioService {

  private apiUrl = 'http://localhost:8080/api/medico-horarios';

  constructor(private http: HttpClient) { }
 
  registrarMedicoHorario(medicoHorario: MedicoHorario): Observable<MedicoHorario> {
    return this.http.post<MedicoHorario>(`${this.apiUrl}/asignar`, medicoHorario);
  }

  listarMedicoHorario(): Observable<MedicoHorario[]> {
    return this.http.get<MedicoHorario[]>(`${this.apiUrl}/listar`);
  }

  generarIntervaloHorario(medicoHorario: MedicoHorario): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/generar-intervalos`, medicoHorario);
  }

}
