import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateJuegoComponent } from './pages/create-juego/create-juego.component';
import { JuegoComponent } from './pages/juego/juego.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'create',
    component: CreateJuegoComponent,
  },
  {
    path: ':juego_id',
    component: JuegoComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
