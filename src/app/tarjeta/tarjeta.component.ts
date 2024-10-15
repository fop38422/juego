import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje.model';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  
  @Input() personaje: Personaje;

}
