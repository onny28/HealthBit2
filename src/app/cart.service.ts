import { Injectable } from '@angular/core';
import { Idea } from './services/idea.service';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items = [];

  idea: Idea = {
    name: '',
    notes: '',
    steps:'',
    ingredients: ['']
    };

   
    private cart = [];

  constructor() {}

  addToCart(ingredient){
    this.items.push(ingredient);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

 
}
