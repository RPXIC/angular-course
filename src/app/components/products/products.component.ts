import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpeg',
      // category: 'all',
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: '../assets/images/bike.jpeg',
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpeg',
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpeg',
    },
    {
      id: '5',
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpeg',
    },
    {
      id: '6',
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpeg',
    },
  ];
}
