import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { DetallesJugadorComponent } from './detalles-jugador/detalles-jugador.component';

const routes: Routes = [
  { path: '', redirectTo: '/jugadores', pathMatch: 'full' },
  { path: 'jugadores', component: JugadoresComponent },
  { path: 'jugador/:id', component: DetallesJugadorComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
