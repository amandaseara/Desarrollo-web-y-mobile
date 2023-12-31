import { Component } from '@angular/core';
import {JUGADORES} from '../datos-jugadores/lista-jugadores'

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})

export class JugadoresComponent {
  jugadores = JUGADORES;

  nuevoJugador: any = {
    nombre: '',
    posicion: '',
    imagen: ''
  };
  maxJugadores = 23;

  agregarJugador(nombre:string,posicion:string,imagen:string): void{
    if (this.jugadores.length < this.maxJugadores) {
      const nuevoId = this.jugadores.length + 1;
      if (nombre !== '' && posicion!== ''){
        this.jugadores.push({
          id: nuevoId,
          nombre: nombre,
          posicion: posicion,
          imagen: imagen || '../../assets/2.jpg'
        });
      }
    } else {
      alert("No se puden agregar mas jugadores!!!!")
    }
  }

  eliminarJugador(id: number): void {
    const index = this.jugadores.findIndex((jugador) => jugador.id === id);
    this.jugadores.splice(index, 1);
  }
}
