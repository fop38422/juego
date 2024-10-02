import { Component } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  posicion:number = 1;

  siguienteP(){
    if (this.posicion < 5){
      this.posicion++;
    }else{
      this.posicion = 1;
    }
  }

  anteriorP(){
    if (this.posicion > 1){
    this.posicion--;
    }else{
      this.posicion = 5;
    }
  }
}
