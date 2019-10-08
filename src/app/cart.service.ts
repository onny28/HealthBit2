import { Injectable } from '@angular/core';
import { Idea } from './services/idea.service';

 
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  idea: Idea = {
    name: '',
    notes: '',
    steps:'',
    ingredients: [{
      name: '',
      price: undefined,
    }]
    };

    private cart = [];
    cartCount: number;
    

  constructor() {
   this.cartCount = 0;
  }
 
  getIngredients(){
    return this.idea.ingredients;
  }

  addCart(ingredient) {
    this.cart.push(ingredient);
  }

  getCart(){
    return this.cart;
  }

 
}
