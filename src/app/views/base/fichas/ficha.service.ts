import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ficha} from "./ficha";

@Injectable({
  providedIn: 'root'
})
export class FichaService {

  private apiUrl = 'http://localhost:8080/api/fichas';

  constructor(private http: HttpClient) { }

  listarFichas(): Observable<Ficha[]> {
    return this.http.get<Ficha[]>(`${this.apiUrl}/listar`);
  }


}
