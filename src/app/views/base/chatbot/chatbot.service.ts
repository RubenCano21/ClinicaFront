import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  private apiURL = 'http://localhost:8080/api/chatbot';

  constructor(private http: HttpClient) { }


  sendMessage(to: string, message: string): Observable<any>{
    return this.http.post<any>(`${this.apiURL}/send`, {to, message});
  }

  reviewMessage( message: string): Observable<any>{
    return this.http.post<any>(`${this.apiURL}/webhook`, {message});
  }

}
