import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products: any [];
  constructor() {
    this.products = [
      'Chocolate',
      'Café',
      'Pipoca',
      'Batata Frita',
      'Coca cola',
      'Hamburguer',
      'Banana'
    ]
  }

 getProducts(): any {
   return this.products;
 }
}
