import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes.component';
import { MaterialModule } from 'src/app/material.module';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { EpisodioPipe } from './pipes/episodio.pipe';


@NgModule({
  declarations: [PersonajesComponent, PersonajeComponent, EpisodioPipe],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    MaterialModule
  ]
})
export class PersonajesModule { }
