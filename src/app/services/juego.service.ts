import { HttpClient } from '@angular/common/http';
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

  getJuegos(): Observable<Juego[]> {
    return this.http.get<Juego[]>(`${this.api}`);
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
}
