import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'app', loadChildren: () => import('src/app/aplicacion/aplicacion.module').then(m => m.AplicacionModule) },
  { path: 'inicio', loadChildren: () => import('src/app/inicio/inicio.module').then(m => m.InicioModule) },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
