import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full'
      },
      { path: 'todos', loadChildren: '../todos/todos.module#TodosModule', data: { title: 'todos' } },
      { path: 'labels', loadChildren: '../labels/labels.module#LabelsModule', data: { title: 'labels' } },
      { path: 'theming', loadChildren: '../theming/theming.module#ThemingModule', data: { title: 'theming' } },
      { path: '**', loadChildren: '../todos/todos.module#TodosModule', data: { title: 'todos' } }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule { }
