import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificarComponent } from './components/modificar/modificar.component';
import { NuevoPersonajeComponent } from './components/nuevo-personaje/nuevo-personaje.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { SerieComponent } from './components/serie/serie.component';

const routes: Routes = [
  { path: 'serie/:idserie', component: SerieComponent },
  { path: 'personajes/:idserie', component: PersonajesComponent },
  { path: 'crear', component: NuevoPersonajeComponent },
  { path: 'modificar', component: ModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }