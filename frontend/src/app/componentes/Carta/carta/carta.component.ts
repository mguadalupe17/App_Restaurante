import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  carta: any[] = [
    {
      nombre: 'Ensalada César',
      descripcion: 'Ensalada clásica con aderezo César, crutones y queso parmesano.',
      precio: 7.99,
      imagen: 'assets/ensalada.jpg' // Ruta a la imagen de la ensalada César
    },
    {
      nombre: 'Pizza Margherita',
      descripcion: 'Pizza con salsa de tomate, mozzarella fresca, y albahaca.',
      precio: 12.99,
      imagen: 'assets/pizza.jpg' // Ruta a la imagen de la pizza Margherita
    },
    {
      nombre: 'Spaghetti Bolognese',
      descripcion: 'Spaghetti con salsa bolognesa hecha con carne de res y tomate.',
      precio: 10.99,
      imagen: 'assets/spagethi.jpg' // Ruta a la imagen del spaghetti Bolognese
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  agregarAlPedido(plato: any): void {
    console.log('Añadir al pedido:', plato);
    // Lógica para añadir al pedido
  }
}
