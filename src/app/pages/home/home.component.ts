import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../../services/juego.service';
import { JuegoDetalle } from '../../interface/juego';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  juegos: JuegoDetalle[] = [];

  constructor(private _juegoServices: JuegoService) {}

  ngOnInit(): void {
    this.getJuegos();
  }

  getJuegos() {
    this._juegoServices.getJuegos().subscribe((data) => {
      this.juegos = data;
      console.log(this.juegos);
    });
  }
}
