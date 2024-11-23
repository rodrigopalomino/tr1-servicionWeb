import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Consola,
  CreateJuego,
  Genero,
  Juego,
  JuegoDetalle,
} from '../interface/juego';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JuegoService {
  api: string = 'http://localhost:8080/api/juegos';

  constructor(private http: HttpClient) {}

  getJuegos(nombre?: string): Observable<Juego[]> {
    let params = new HttpParams();

    if (nombre) {
      params = params.set('nombre', nombre);
    }

    return this.http.get<Juego[]>(`${this.api}`, { params });
  }

  getJuego(juego_id: string): Observable<Juego> {
    return this.http.get<Juego>(`${this.api}/${juego_id}`);
  }

  getConsolas(): Observable<Consola[]> {
    return this.http.get<Consola[]>(`http://localhost:8080/api/consolas`);
  }

  getGeneros(): Observable<Genero[]> {
    return this.http.get<Genero[]>(`http://localhost:8080/api/generos`);
  }

  createJuego(newJuego: CreateJuego) {
    return this.http.post<CreateJuego>(
      `http://localhost:8080/api/juegos`,
      newJuego
    );
  }

  deleteJuego(juego_id: string) {
    return this.http.delete(`http://localhost:8080/api/juegos/${juego_id}`);
  }

  login(username: string, password: string) {
    return this.http.post(`http://localhost:8080/api/usuarios/login`, {
      username,
      password,
    });
  }

  createUsuario(username: string, password: string) {
    return this.http.post(`http://localhost:8080/api/usuarios`, {
      username,
      password,
    });
  }
}
