import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Enfermeria} from "./enfermeria";

@Injectable({
  providedIn: 'root'
})
export class EnfermeriaService {

  private apiURL = 'http://localhost:8080/api/enfermeria';

  constructor(private http: HttpClient) { }

  obtenerEnfermerias(): Observable<Enfermeria[]>{
    return this.http.get<Enfermeria[]>(`${this.apiURL}/listar`);
  }

  registrarEnfermeria(enfermeria: Enfermeria): Observable<Enfermeria>{
    return this.http.post<Enfermeria>(`${this.apiURL}/registrar`, enfermeria);
  }
}
