import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES
  ],
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    PagesComponent,
  ],
  exports : [
    DashboardComponent,
    UsuariosComponent,
    PagesComponent
  ]
})
export class PagesModule { }
