import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // Ruta corregida

@Component({
  selector: 'app-auth',
  standalone: true, // Para evitar errores de módulos
  imports: [CommonModule, ReactiveFormsModule], // Se agregaron módulos esenciales
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  authForm: FormGroup;
  mensajeError: string = '';
  isLogin = true;  // ✅ Se agrega para evitar el error en el template
rutas: any;

  constructor(private fb: FormBuilder, @Inject(AuthService) private authService: AuthService) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submit() {
    if (this.authForm.valid) {
      const { email, password } = this.authForm.value;
      if (this.isLogin) {
        const success = this.authService.login(email, password);
        if (success) {
          console.log('Inicio de sesión exitoso');
          window.location.href = '/dashboard'; // Redirigir al dashboard
        } else {
          this.mensajeError = 'Correo o contraseña incorrectos';
        }
      } else {
        alert('Registro simulado (aún no conectado a una base de datos)');
      }
    }
  }

  toggleForm() {
    this.isLogin = !this.isLogin;
    this.mensajeError = '';
  }

  logoutUser() {
    this.authService.logout();
    console.log('Sesión cerrada');
  }
}








