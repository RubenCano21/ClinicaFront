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


  listarMedicoHorario(): Observable<MedicoHorario[]> {
    return this.http.get<MedicoHorario[]>(`${this.apiUrl}/listar`);
  }

}
