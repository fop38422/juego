import { Component, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje.model';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit{
  personajes:Personaje[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.personajes[i] = new Personaje(i + 1);
    }
  }
}
