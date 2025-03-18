import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RutasComponent } from './components/rutas/rutas.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthService } from './services/auth.service';  // Verifica la ruta aquí

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgIf, RutasComponent, AuthComponent, DashboardComponent],  // Asegúrate de importar el servicio aquí
  template: `
    <h1>BIENVENIDOS A TRANSPORTE UTC</h1>
    <nav>
      <button (click)="mostrarComponente('rutas')">Inicio</button>
      <button (click)="mostrarComponente('auth')">Iniciar Sesión</button>
      <button (click)="mostrarComponente('dashboard')">Dashboard</button>
    </nav>

    <div class="contenido">
      <ng-container *ngIf="componenteActual === 'rutas'">
        <app-rutas></app-rutas>
      </ng-container>

      <ng-container *ngIf="componenteActual === 'auth'">
        <app-auth></app-auth>
      </ng-container>

      <ng-container *ngIf="componenteActual === 'dashboard'">
        <app-dashboard></app-dashboard>
      </ng-container>
    </div>
  `,
  styles: [`
    h1 { text-align: center; }
    nav { text-align: center; margin-bottom: 20px; }
    button { margin: 5px; padding: 10px; font-size: 16px; }
    .contenido { display: flex; justify-content: center; }
  `]
})
export class AppComponent {
  componenteActual = 'rutas';
  title: any;

  constructor() {}

  mostrarComponente(componente: string) {
    this.componenteActual = componente;
  }
}





