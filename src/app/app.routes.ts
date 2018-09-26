import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisteredComponent } from './registered/registered.component';


const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'registered', component: RegisteredComponent}
];

// tslint:disable-next-line:eofline
export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true});