import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodiosComponent } from './pages/episodios/episodios.component';
import { LugaresComponent } from './pages/lugares/lugares.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { TemplateComponent } from './template.component';

const routes: Routes = [
  {path: '', component: TemplateComponent, children: [
    { path: "personajes", loadChildren: () => import('src/app/aplicacion/pages/personajes/personajes.module').then(m => m.PersonajesModule) },
    { path: "lugares", loadChildren: () => import('src/app/aplicacion/pages/lugares/lugares.module').then(m => m.LugaresModule) },
    { path: "episodios", loadChildren: () => import('src/app/aplicacion/pages/episodios/episodios.module').then(m => m.EpisodiosModule) },
    { path: '**', redirectTo: 'personajes', pathMatch: 'full' }
  ] },
  {path: '**', redirectTo: 'personajes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicacionRoutingModule { }
