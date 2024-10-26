import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario'; // Ajusta la ruta según la estructura de tu proyecto

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  // Cambia esta URL a la del endpoint de tu backend que devuelve todos los usuarios
  private baseUrl = 'http://localhost:8080/login'; // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient) {}

  // Método para obtener todos los usuarios del backend
  findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl);
  }

  // Método para autenticar un usuario
  login(credentials: { username: string, password: string }): Observable<any> {
    // Cambia esta URL a la del endpoint de tu backend para la autenticación
    return this.http.post<any>(this.baseUrl, credentials);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token'); 
  }
}
