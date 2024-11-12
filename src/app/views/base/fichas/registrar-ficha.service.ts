import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ficha} from "./ficha";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegistrarFichaService {

  private apiUrl = 'http://localhost:8080/api/fichas';

  constructor(private http: HttpClient) { }

  registrarFicha(ficha: any) : Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/agendarFicha`, ficha);
  }
}
