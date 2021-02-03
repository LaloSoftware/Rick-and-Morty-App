import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { MaterialModule } from '../material.module';
import { TemplateComponent } from './template.component';


@NgModule({
  declarations: [TemplateComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialModule
  ]
})
export class InicioModule { }
