import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { TarjetaCaballeroComponent } from './tarjeta-caballero/tarjeta-caballero.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    TarjetaCaballeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
