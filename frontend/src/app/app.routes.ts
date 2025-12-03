import { Estadisticas } from './components/estadisticas/estadisticas';
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { LogginComponent } from './components/loggin/loggin';
import { Filters } from './components/filters/filters';
import { DashboardComponent } from './components/dashboard/dashboard';
import { Form } from './components/form/form';
import { FormUser } from './components/form-user/form-user';


export const routes: Routes = [

    {path: '', component: Home}, // <-- Esto es lo que se renderiza en el router-outlet
    {path: 'login', component: LogginComponent },
    {path: 'statistics', component: Estadisticas },
    {path: 'filters', component: Filters },
    {path: 'dashboard', component:DashboardComponent},
    {path: 'register-form', component: Form},
    {path: 'register-user', component: FormUser}

];