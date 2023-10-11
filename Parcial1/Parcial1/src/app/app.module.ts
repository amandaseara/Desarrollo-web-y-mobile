import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { JugadorComponent } from './jugador/jugador.component';
import { DetallesJugadorComponent } from './detalles-jugador/detalles-jugador.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadoresComponent,
    JugadorComponent,
    DetallesJugadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
