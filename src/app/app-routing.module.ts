import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './personajes/personajes.component';
import { EscenariosComponent } from './escenarios/escenarios.component';

const routes: Routes = [
  { path: '', component: PersonajesComponent },
  { path: 'personajes', component: PersonajesComponent },
  { path: 'escenarios', component: EscenariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
