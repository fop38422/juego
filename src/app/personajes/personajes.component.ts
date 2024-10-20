import { Component } from '@angular/core';
import { Personaje } from '../models/personaje.model';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  posicion:number = 0;

  personajes:Personaje[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.personajes[i] = new Personaje(i + 1);
    }
  }

  siguienteP(){
    if (this.posicion < 4){
      this.posicion++;
    }else{
      this.posicion = 0;
    }
  }

  anteriorP(){
    if (this.posicion > 0){
    this.posicion--;
    }else{
      this.posicion = 4;
    }
  }
}
