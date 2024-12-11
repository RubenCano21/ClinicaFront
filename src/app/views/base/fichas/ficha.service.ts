import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ficha} from "./ficha";
import {DatosReservaFicha} from "./agendar-ficha/datos-reserva-ficha";

@Injectable({
  providedIn: 'root'
})
export class FichaService {

  private apiUrl = 'http://localhost:8080/api/fichas';

  constructor(private http: HttpClient) { }

  listarFichas(): Observable<Ficha[]> {
    return this.http.get<Ficha[]>(`${this.apiUrl}/listar`);
  }

  agendarFicha(data: DatosReservaFicha): Observable<any>{
    //const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${this.apiUrl}/agendarFicha`, data);
  }



}
