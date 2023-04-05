import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://localhost:3000/api/auth/login'; // URL del endpoint de login en el backend

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { username, password })
      .pipe(
        tap(response => {
          localStorage.setItem('token', response.token); // Almacenar el token en el localStorage del navegador
        })
      );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken(); // Devuelve true si el token existe, de lo contrario devuelve false
  }

  logout(): void {
    localStorage.removeItem('token'); // Eliminar el token del localStorage
  }

}
