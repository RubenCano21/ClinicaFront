import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IntervaloHorario} from "./intervalo-horario";
import {Observable} from "rxjs";
import {MedicoHorario} from "./medico-horario";

@Injectable({
  providedIn: 'root'
})
export class IntervaloHorarioService {

  private apiUrl = 'http://localhost:8080/api/intervalo-horarios';

  constructor(private http: HttpClient) { }

  // generarIntervaloHorario(medicoHorario: MedicoHorario) : Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/generar-intervalos`, medicoHorario);
  // }

  listarIntervalos(): Observable<IntervaloHorario[]> {
    return this.http.get<IntervaloHorario[]>(`${this.apiUrl}/listar`);
  }
}
