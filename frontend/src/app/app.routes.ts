import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { LogginComponent } from './components/loggin/loggin';
import { DashboardComponent } from './components/dashboard/dashboard';

export const routes: Routes = [

    {path: '', component: Home}, // <-- Esto es lo que se renderiza en el router-outlet
    {path: 'login', component: LogginComponent },
    {path: 'dashboard', component:DashboardComponent}
];