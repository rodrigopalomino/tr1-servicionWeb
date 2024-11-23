import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../../services/juego.service';
import { Juego, JuegoDetalle } from '../../interface/juego';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NavbarComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  juegos: Juego[] = [];
  form!: FormGroup;

  constructor(private _juegoServices: JuegoService, private fb: FormBuilder) {}

  createForm() {
    this.form = this.fb.group({
      nombre: [''],
    });
  }

  ngOnInit(): void {
    this.createForm();
    this.getJuegos();
  }

  searchJuego() {
    this._juegoServices.getJuegos(this.form.get('nombre')?.value).subscribe({
      next: (res: any) => {
        this.juegos = res;
      },
    });
  }

  getJuegos() {
    this._juegoServices.getJuegos().subscribe((data) => {
      this.juegos = data;
      console.log(this.juegos);
    });
  }
}
