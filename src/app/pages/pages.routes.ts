import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VentasComponent } from './ventas/ventas.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProductoComponent } from './producto/producto.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DespachoComponent } from './despacho/despacho.component';
import { InventarioComponent } from './inventario/inventario.component';
import { PerfilComponent } from './perfil/perfil.component';

const pagesRoutes: Routes = [
{
    path: '', component: PagesComponent,
    children : [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'usuarios', component: UsuariosComponent},
        {path: 'ventas', component: VentasComponent},
        {path: 'proveedores', component: ProveedoresComponent},
        {path: 'productos', component: ProductoComponent},
        {path: 'clientes', component: ClientesComponent},
        {path: 'despacho', component: DespachoComponent},
        {path: 'inventario', component: InventarioComponent},
        {path: 'perfil', component: PerfilComponent},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
}
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
