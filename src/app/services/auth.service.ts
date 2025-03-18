import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Asegura que el servicio esté disponible en toda la aplicación
})
export class AuthService {
  register(arg0: { first_name: any; last_name: any; email: any; pwd: any; id_ruta: any; }) {
    throw new Error('Method not implemented.');
  }
  private usuarios: any[] = [];
  private usuarioActual: any = null;
  private apiUrl = 'http://localhost:3001/usuarios_empanadas';  
  constructor(private http: HttpClient) {
    this.cargarUsuarios();  // Cargar usuarios desde caché o servidor al iniciar
  }

  // Método para cargar los usuarios desde caché o servidor
  private cargarUsuarios() {
    const usuariosEnCache = localStorage.getItem('usuariosMockaroo');
    if (usuariosEnCache) {
      // Si los usuarios están en caché, cargarlos desde localStorage
      this.usuarios = JSON.parse(usuariosEnCache);
      console.log('Datos de Mockaroo cargados desde caché:', this.usuarios);
    } else {
      // Si no hay usuarios en caché, los obtenemos del servidor
      this.obtenerUsuariosDelServidor().subscribe((usuarios) => {
        this.usuarios = usuarios;
        // Almacenar los usuarios en caché para futuras consultas
        localStorage.setItem('usuariosMockaroo', JSON.stringify(usuarios));
        console.log('Datos de Mockaroo obtenidos del servidor y guardados en caché:', this.usuarios);
      }, (error) => {
        console.error('Error al obtener los usuarios del servidor:', error);
      });
    }
  }

  // Método para obtener los usuarios desde el servidor JSON
  private obtenerUsuariosDelServidor(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);  // Realizamos la solicitud GET al servidor
  }

  // Método de login que compara las credenciales
  login(email: string, password: string): boolean {
    console.log(this.usuarios);
    const usuario = this.usuarios.find(u => u.email === email && u.pwd === password);
    if (usuario) {
      this.usuarioActual = usuario;
      localStorage.setItem('usuarioActual', JSON.stringify(usuario));  // Guardamos el usuario autenticado en caché
      console.log('Usuario autenticado:', usuario);
      return true;
    }
    console.warn('Credenciales incorrectas');
    return false;
  }

  // Método de logout que cierra la sesión
  logout(): void {
    this.usuarioActual = null;
    localStorage.removeItem('usuarioActual');
    console.log('Sesión cerrada.');
  }

  // Método para obtener el usuario actual desde el caché
  getUsuarioActual(): any {
    return JSON.parse(localStorage.getItem('usuarioActual') || 'null');
  }
}











