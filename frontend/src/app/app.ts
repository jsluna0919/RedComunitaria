import { Component, signal, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router'; // 1. Router y eventos de navegación
import { filter } from 'rxjs/operators'; // 2. Para filtrar eventos
import { CommonModule } from '@angular/common'; // 3. Para usar *ngIf en el template
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      RouterOutlet, 
      Navbar, 
      Footer,
      CommonModule // ¡Añadido! Necesario para *ngIf
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit { // Implementamos OnInit
  title = signal('frontend');
  
  // Propiedad de control: Se muestra por defecto.
  showNavbar: boolean = true;
  
  // RUTAS A EXCLUIR: Añade aquí las rutas completas donde NO quieres que se muestre el navbar.
  private excludedRoutes: string[] = [
    '/dashboard', 
    '/login',
    '/register-form',
    '/register-user'
    // '/otra-ruta-sin-navbar'
  ];

  constructor(private router: Router) { } // Inyectamos el servicio Router

  ngOnInit() {
    // Suscribirse a los eventos del router
    this.router.events
      .pipe(
        // Solo nos interesan los eventos de navegación finalizada
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        // Obtenemos la ruta actual (después de redirecciones)
        const currentRoute = event.urlAfterRedirects;

        // Si la ruta actual está en la lista de exclusión, showNavbar es falso.
        this.showNavbar = !this.excludedRoutes.includes(currentRoute);
      });
  }
}