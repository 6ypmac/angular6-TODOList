import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';
import {
  MatTableModule
} from '@angular/material';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule,
    FlexLayoutModule,
    MatTableModule
  ],
  declarations: [
    TodosComponent
  ],
  exports: [
    CdkTableModule
  ]
})
export class TodosModule { }
