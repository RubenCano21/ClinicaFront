import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ficha} from "../ficha";
import {DatosReservaFicha} from "./datos-reserva-ficha";

@Injectable({
  providedIn: 'root'
})
export class AgendarFichaService {

  private apiUrl='http://localhost:8080/api/fichas';

  constructor(private http: HttpClient) { }

  registrarFicha(ficha: DatosReservaFicha): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/agendarFicha`, ficha);
  }

  agendarFicha(data: DatosReservaFicha): Observable<any>{
    return this.http.post(`${this.apiUrl}/agendarFicha`, data);
  }

}
