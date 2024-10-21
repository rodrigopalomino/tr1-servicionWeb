import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consola, CreateJuego, Genero, JuegoDetalle } from '../interface/juego';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JuegoService {
  api: string = 'http://localhost:5160/api/juegos';

  constructor(private http: HttpClient) {}

  getJuegos(): Observable<JuegoDetalle[]> {
    return this.http.get<JuegoDetalle[]>(`${this.api}`);
  }

  getJuego(juego_id: string): Observable<JuegoDetalle> {
    return this.http.get<JuegoDetalle>(`${this.api}/${juego_id}`);
  }

  getConsolas(): Observable<Consola[]> {
    return this.http.get<Consola[]>(`http://localhost:5160/api/consolas`);
  }

  getGeneros(): Observable<Genero[]> {
    return this.http.get<Genero[]>(`http://localhost:5160/api/generos`);
  }

  createJuego(newJuego: CreateJuego) {
    return this.http.post<CreateJuego>(
      `http://localhost:5160/api/juegos`,
      newJuego
    );
  }

  deleteJuego(juego_id: string) {
    return this.http.delete(`http://localhost:5160/api/juegos/${juego_id}`);
  }
}
