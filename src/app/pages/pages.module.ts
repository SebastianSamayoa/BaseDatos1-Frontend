import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { VentasComponent } from './ventas/ventas.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    RouterModule
  ],
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    PagesComponent,
    VentasComponent,
  ],
  exports : [
    DashboardComponent,
    UsuariosComponent,
    PagesComponent
  ]
})
export class PagesModule { }
