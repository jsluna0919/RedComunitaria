import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { LogginComponent } from './components/loggin/loggin';

export const routes: Routes = [

    {path: '', component: Home}, // <-- Esto es lo que se renderiza en el router-outlet
    {path: 'login', component: LogginComponent }
];