import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JUGADORES } from '../datos-jugadores/lista-jugadores';

@Component({
  selector: 'app-detalles-jugador',
  templateUrl: './detalles-jugador.component.html',
  styleUrls: ['./detalles-jugador.component.css']
})
export class DetallesJugadorComponent {
  jugador: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      if (idParam !== null) {
        const jugadorId = +idParam; // Intenta convertir el valor a número
        this.jugador = JUGADORES.find((j) => j.id === jugadorId);
        if (!this.jugador) {
          // Si el producto no se encuentra
          this.router.navigate(['/jugadores']);
        }
      }
    });
  }
}
 