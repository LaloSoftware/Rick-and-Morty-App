import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicacionRoutingModule } from './aplicacion-routing.module';
import { MaterialModule } from '../material.module';
import { TemplateComponent } from './template.component';


@NgModule({
  declarations: [TemplateComponent],
  imports: [
    CommonModule,
    AplicacionRoutingModule,
    MaterialModule
  ]
})
export class AplicacionModule { }
