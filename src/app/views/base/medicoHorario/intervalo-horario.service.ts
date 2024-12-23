import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IntervaloHorario} from "./intervalo-horario";
import {Observable} from "rxjs";
import {MedicoHorario} from "./medico-horario";

@Injectable({
  providedIn: 'root'
})
export class IntervaloHorarioService {

  private apiUrl = 'http://localhost:8080/api/intervalo-horarios';

  constructor(private http: HttpClient) { }

  listarIntervalos(): Observable<IntervaloHorario[]> {
    return this.http.get<IntervaloHorario[]>(`${this.apiUrl}/listar`);
  }

  filtrarPorMedico(medicoHorarioId: number): Observable<IntervaloHorario[]> {
    return this.http.get<IntervaloHorario[]>(`${this.apiUrl}/medico/${medicoHorarioId}`);
  }

}
