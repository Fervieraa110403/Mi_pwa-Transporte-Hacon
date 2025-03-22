import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RutasComponent } from './components/rutas/rutas.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgIf, RutasComponent, AuthComponent, DashboardComponent],  
  template: `
    <header class="app-header">
      <div class="logo-container">
        <img src="assets/logo.png" alt="Logo Transporte UTC" class="app-logo">
        <h1>BIENVENIDOS TRANSPORTE UTC</h1>
      </div>

      <nav class="nav-bar">
        <button (click)="mostrarComponente('rutas')">Inicio</button>
        <button (click)="mostrarComponente('auth')">Iniciar Sesión</button>
        <button (click)="mostrarComponente('dashboard')">Dashboard</button>
      </nav>
    </header>

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
    .app-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: linear-gradient(135deg, #006400, #228B22);
      padding: 15px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
      color: #FFFFFF;
      text-align: center;
    }

    .logo-container {
      display: flex;
      align-items: center;
    }

    .app-logo {
      width: 50px;
      height: 50px;
      margin-right: 15px;
      border-radius: 50%;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    }

    h1 {
      font-size: 24px;
      font-family: 'Roboto', sans-serif;
      font-weight: bold; /* Resalta el título */
      margin: 0;
      color: #FFFFFF; /* Texto en blanco */
    }
    

    .nav-bar {
      display: flex;
      gap: 10px;
    }

    button {
      padding: 10px 15px;
      font-size: 16px;
      background-color: #228B22; /* Verde más brillante */
      color: white;
      border: 2px solid #006400;
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    button:hover {
      background-color: #006400; /* Verde más oscuro al pasar el mouse */
      color: #FFD700; /* Dorado en hover */
    }

    .contenido {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
  `]
})
export class AppComponent {
  componenteActual = 'rutas';

  mostrarComponente(componente: string) {
    this.componenteActual = componente;
  }
}









