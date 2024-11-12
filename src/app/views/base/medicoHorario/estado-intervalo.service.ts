/*import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EstadoIntervaloService {

  private apiURL = 'http://localhost:8080/api/estado-intervalo';

  constructor(private http: HttpClient) { }

  getEstadosIntervalo(): Observable<string[]>{
    return this.http.get<string[]>(`${this.apiURL}`);
  }
}*/
