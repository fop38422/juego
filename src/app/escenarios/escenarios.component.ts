import { Component } from '@angular/core';
import { Escenario } from '../models/escenario.model';

@Component({
  selector: 'app-escenarios',
  templateUrl: './escenarios.component.html',
  styleUrls: ['./escenarios.component.css']
})
export class EscenariosComponent {
  posicion: number = 0;
  
  escenarios:Escenario[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      this.escenarios[i] = new Escenario(i + 1);
    }
  }

  anteriorE() {
    if (this.posicion > 0) {
      this.posicion--;
    } else {
      this.posicion = 2;
    }
  }

  siguienteE() {
    if (this.posicion < 2) {
      this.posicion++;
    } else {
      this.posicion = 0;
    }
  }
}
