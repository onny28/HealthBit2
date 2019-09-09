import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.page.html',
  styleUrls: ['./grocerylist.page.scss'],
})
export class GrocerylistPage implements OnInit {

  items;

  constructor(private cartService: CartService) { 
    this.items = this.cartService.getItems();
  }

  ngOnInit() {
  }

}
