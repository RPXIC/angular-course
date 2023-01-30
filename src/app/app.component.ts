import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  widthImg = 10;
  showImg = true;
  name = 'rpxic';
  age = 34;
  imgParent = '';
  img =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1920px-Angular_full_color_logo.svg.png';
  btnDisabled = true;
  register = {
    name: '',
    email: '',
    password: '',
  };
  person = {
    name: 'rpxic',
    age: 34,
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1920px-Angular_full_color_logo.svg.png',
  };
  names: string[] = ['pepito', 'grillo', 'pepigri'];
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red',
  };
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

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  delete(index: number) {
    this.names.splice(index, 1);
  }

  onRegister() {
    console.log(this.register);
  }

  onLoaded(img: string) {
    console.log('log father', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}
