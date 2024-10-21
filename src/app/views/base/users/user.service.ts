import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    {id:1, username:'Ruben', password: '1234', admin: true},
    {id:2, username:'Carol', password: '1234', admin: false},
    {id:3, username:'Max', password: '1234', admin: false},
    {id:4, username:'Lucas', password: '1234', admin: true}
  ];

  private url: string = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }


  findAll(): Observable<User[]> {
    //return of(this.clientes);
    return this.http.get(this.url).pipe(
      map((response: any)=> response._embedded.users as User[]),
    )
  }

  create(cliente: User): Observable<User> {
    return this.http.post<User>(this.url, cliente );
  }

  update(cliente: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${cliente.id}`, cliente );
  }


  setCliente(cliente: any){
    this.users.push(cliente);
  }

  // getClientes(): Observable<any> {
  //   return this.http.get(`${this.url}/clientes`);
  // }

}
