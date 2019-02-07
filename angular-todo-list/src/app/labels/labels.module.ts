import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabelsRoutingModule } from './labels-routing.module';
import { LabelsComponent } from './labels.component';

@NgModule({
  imports: [
    CommonModule,
    LabelsRoutingModule
  ],
  declarations: [
    LabelsComponent
  ]
})
export class LabelsModule { }
