import { Component } from '@angular/core';

@Component({
  selector: 'app-tu-componente',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  calificacion: number;
  sugerencias: string;

  constructor() {
    this.calificacion = 5; // Valor inicial opcional, 5 estrellas por defecto
    this.sugerencias = ''; // Inicializar sugerencias vacías
  }

  enviarCalificacion() {
    console.log('Calificación:', this.calificacion);
    console.log('Sugerencias:', this.sugerencias);
    // Aquí puedes implementar la lógica para enviar la calificación y sugerencias al backend
  }
}
