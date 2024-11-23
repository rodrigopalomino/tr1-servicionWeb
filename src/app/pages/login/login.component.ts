import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { JuegoService } from '../../services/juego.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  error1: boolean = false;

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

    this._juegoService.login(username, password).subscribe({
      next: (res: any) => {
        console.log('123');
        console.log(res);
        this.route.navigate(['']);
      },
      error: (e: HttpErrorResponse) => {
        this.error1 = true;
      },
    });
  }
}
