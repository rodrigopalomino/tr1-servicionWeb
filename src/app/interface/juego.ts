export interface JuegoDetalle {
  juegoId: number;
  juego: Juego;
  consolas: { consolaId: number; consolaNombre: string }[];
  generos: { generoId: number; generoNombre: string }[];
}

export interface CreateJuego {
  juegoId: number;
  juego: Juego;
  consolas: number[];
  generos: number[];
}

export interface Consola {
  id: number;
  nombre: string;
}

export interface Genero {
  id: number;
  nombre: string;
}

export interface Juego {
  id: number;
  nombre: string;
  descripcion: string;
  fecha: Date;
  desarrolladora: string;
  urlImg: string;
  clikes: number;
  cdislikes: number;
  ccomentarios: number;
}
