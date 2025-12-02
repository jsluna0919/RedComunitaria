import { Estadisticas } from './components/estadisticas/estadisticas';
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { LogginComponent } from './components/loggin/loggin';
import { Filters } from './components/filters/filters';

export const routes: Routes = [

    {path: '', component: Home}, // <-- Esto es lo que se renderiza en el router-outlet
    {path: 'login', component: LogginComponent },
    {path: 'statics', component: Estadisticas },
    {path: 'filters', component: Filters },

];