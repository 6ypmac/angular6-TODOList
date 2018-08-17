import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TodosComponent } from './todos/todos.component';
import { LabelsComponent } from './labels/labels.component';
import { ThemingComponent } from './theming/theming.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, SidebarComponent, TodosComponent, LabelsComponent, ThemingComponent]
})
export class DashboardModule { }
