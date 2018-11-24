import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { VentasComponent } from './ventas/ventas.component';
import { RouterModule } from '@angular/router';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { DespachoComponent } from './despacho/despacho.component';
import { ProductoComponent } from './producto/producto.component';
import { ClientesComponent } from './clientes/clientes.component';
import { InventarioComponent } from './inventario/inventario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    PagesComponent,
    VentasComponent,
    ProveedoresComponent,
    DespachoComponent,
    ProductoComponent,
    ClientesComponent,
    InventarioComponent,
    PerfilComponent,
  ],
  exports : [
    DashboardComponent,
    UsuariosComponent,
    PagesComponent
  ]
})
export class PagesModule { }
