import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { JuegoService } from '../../services/juego.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  form!: FormGroup;

  constructor(
    private _juegoService: JuegoService,
    private fb: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit() {
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;

    this._juegoService.createUsuario(username, password).subscribe({
      next: (res: any) => {
        this.route.navigate(['login']);
      },
      error: (e: HttpErrorResponse) => {},
    });
  }
}
