import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateJuegoComponent } from './pages/create-juego/create-juego.component';
import { JuegoComponent } from './pages/juego/juego.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'create',
    component: CreateJuegoComponent,
  },
  {
    path: ':juego_id',
    component: JuegoComponent,
  },
];
