import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rutas',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})

export class RutasComponent {
  rutas = [
    { id: 1, nombre: 'Ruta 1, Fundadores' },
    { id: 2, nombre: 'Ruta 2, Saltillo 2000' },
    { id: 3, nombre: 'Ruta 3, Guayulera' },
    { id: 4, nombre: 'Ruta 4, Santa Elena' },
    { id: 5, nombre: 'Ruta 5, Urdiñola' },
    { id: 6, nombre: 'Ruta 6, Lomas verdes' },
    { id: 7, nombre: 'Ruta 7, Arteaga' },
    { id: 8, nombre: 'Ruta 8, Centro-cañada' },
    { id: 9, nombre: 'Ruta 9, Mirasierra' },
    { id: 10, nombre: 'Ruta 10, Loma linda' },
    { id: 11, nombre: 'Ruta 11, Zaragoza-otilio' },
    { id: 12, nombre: 'Ruta 12, Central guayulera' },
    { id: 13, nombre: 'Ruta 13, Brisas Vito Alessio ' },
    { id: 14, nombre: 'Ruta 14, Madero sixta cruz' },
    { id: 15, nombre: 'Ruta 15, Manantiales' },
    { id: 16, nombre: 'Ruta 16, Analco' },
    { id: 17, nombre: 'Ruta 17, Soporte' }
  ];

  imagenSeleccionada: string | null = null; // 📌 Variable para almacenar la imagen seleccionada

  seleccionarRuta(id: number) {
    this.imagenSeleccionada = `/assets/rutas/${id}.jpg`; // 📌 Carga la imagen correspondiente
    console.log("Cargando imagen:", this.imagenSeleccionada);
  }

  cerrarImagen() {
    this.imagenSeleccionada = null; // 📌 Oculta la imagen cuando el usuario haga clic en "Cerrar"
  }
}

