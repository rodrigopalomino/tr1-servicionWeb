import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { JuegoDetalle } from '../../interface/juego';
import { JuegoService } from '../../services/juego.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css'],
})
export class JuegoComponent implements OnInit {
  juegoId!: string;
  juego!: JuegoDetalle;

  constructor(
    private route: ActivatedRoute,
    private _serviceJuego: JuegoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.juegoId = params.get('juego_id')!;
      this.getJuego(this.juegoId);
    });
  }

  getJuego(juegoId: string) {
    this._serviceJuego.getJuego(juegoId).subscribe((data) => {
      this.juego = data;
      console.log(this.juego);
    });
  }

  deleteJuego(juego_id: string) {
    this._serviceJuego.deleteJuego(juego_id).subscribe({
      next: () => {
        console.log('juego borrado');
        this.router.navigate(['']);
      },
    });
  }
}
