import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LugaresRoutingModule } from './lugares-routing.module';
import { LugaresComponent } from './lugares.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [LugaresComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LugaresRoutingModule
  ]
})
export class LugaresModule { }
