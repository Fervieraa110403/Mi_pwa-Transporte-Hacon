import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usuario: any = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.usuario = this.authService.getUsuarioActual();
    
    // ✅ Verificar si el usuario se carga correctamente
    if (this.usuario) {
      console.log('Usuario cargado:', this.usuario);
    } else {
      console.log('No se encontró un usuario en localStorage.');
      window.location.href = '/auth'; // 🔄 Redirigir si no hay usuario
    }
  }

  logout() {
    this.authService.logout();
    window.location.href = '/auth'; // Redirigir a la pantalla de inicio de sesión
  }
}









