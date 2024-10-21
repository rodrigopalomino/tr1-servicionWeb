import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Consola, Genero } from '../../interface/juego';
import { JuegoService } from '../../services/juego.service';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Route, Router } from '@angular/router';

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
      generos: this.fb.array([]),
      consolas: this.fb.array([]),
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

  onCheckChange(event: any, type: string) {
    const formArray: FormArray = this.juegoForm.get(type) as FormArray;

    if (event.target.checked) {
      formArray.push(this.fb.control(event.target.value));
    } else {
      let i: number = 0;
      formArray.controls.forEach((ctrl) => {
        if (ctrl.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onSubmit() {
    if (this.juegoForm.valid) {
      const nuevoJuego = this.juegoForm.value;
      this._juegoService.createJuego(nuevoJuego).subscribe({
        next: (res: any) => {
          this.route.navigate(['']);
        },
        error: (e: HttpErrorResponse) => {
          console.log('error');
          console.log(e);
        },
      });
    } else {
      console.log('Formulario no válido');
    }
  }
}
