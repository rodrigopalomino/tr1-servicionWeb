import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Consola, Genero } from '../../interface/juego';
import { JuegoService } from '../../services/juego.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-juego',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule],
  templateUrl: './create-juego.component.html',
  styleUrls: ['./create-juego.component.css'],
})
export class CreateJuegoComponent implements OnInit {
  juegoForm!: FormGroup;
  consolas!: Consola[];
  generos!: Genero[];

  constructor(
    private fb: FormBuilder,
    private _juegoService: JuegoService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getConsolas();
    this.getGeneros();
  }

  initializeForm() {
    this.juegoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      fecha: ['', Validators.required],
      desarrolladora: ['', [Validators.required, Validators.minLength(3)]],
      urlImg: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  getConsolas() {
    this._juegoService.getConsolas().subscribe((data) => {
      this.consolas = data;
    });
  }

  getGeneros() {
    this._juegoService.getGeneros().subscribe((data) => {
      this.generos = data;
    });
  }

  onSubmit() {
    const nuevoJuego = this.juegoForm.value;
    console.log(nuevoJuego);

    this._juegoService.createJuego(nuevoJuego).subscribe({
      next: (res: any) => {
        this.route.navigate(['']);
      },
      error: (e: HttpErrorResponse) => {
        console.log('Error al crear el juego:', e);
      },
    });
  }
}
