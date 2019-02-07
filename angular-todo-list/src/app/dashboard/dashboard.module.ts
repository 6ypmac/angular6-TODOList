import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMaterialModule } from './dashboard-material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardMaterialModule,
    DashboardRoutingModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }
