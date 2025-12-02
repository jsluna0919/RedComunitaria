// src/app/app.config.ts

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'; // 🎯 AGREGADO: provideZoneChangeDetection
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { Chart, BarController, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(
  BarController, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend
);

export const appConfig: ApplicationConfig = {
  providers: [
    // 🎯 AGREGADO: Proveedor de detección de cambios (CRÍTICO para ng2-charts en Standalone)
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient()
  ]
};