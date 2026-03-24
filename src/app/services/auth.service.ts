import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${this.api}/login`, data);
  }

  register(data: any) {
    return this.http.post(`${this.api}/register`, data);
  }

  guardarSesion(res: any) {
    localStorage.setItem('token', res.token);
    localStorage.setItem('usuario', JSON.stringify(res.user));
  }

  logout() {
    localStorage.clear();
  }

  getUsuario() {
    const user = localStorage.getItem('usuario');
    return user ? JSON.parse(user) : null;
  }
}
