import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VentasComponent } from './ventas/ventas.component';

const pagesRoutes: Routes = [
{
    path: '', component: PagesComponent,
    children : [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'usuarios', component: UsuariosComponent},
        {path: 'ventas', component: VentasComponent},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
}
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
