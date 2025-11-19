import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [

    {path: '', component: Home}, // <-- Esto es lo que se renderiza en el router-outlet
    
];