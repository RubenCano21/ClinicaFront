import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'http://localhost:8080/api/users/listar';

  constructor(private http: HttpClient) { }


  findAll(): Observable<User[]> {
  
    return this.http.get<User[]>(this.url);
  }

  create(cliente: User): Observable<User> {
    return this.http.post<User>(this.url, cliente );
  }

  update(cliente: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${cliente.id}`, cliente );
  }



  // getClientes(): Observable<any> {
  //   return this.http.get(`${this.url}/clientes`);
  // }

}
