import { Component, OnInit } from '@angular/core';

import { IdeaService } from 'app/services/idea.service';
import { CartService } from 'app/cart.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.page.html',
  styleUrls: ['./grocerylist.page.scss'],
})
export class GrocerylistPage implements OnInit {
 
  text = 'check this out'
  url = 'https://'
  items;
  constructor(private cartService: CartService, private socialSharing: SocialSharing) { 
    
  }



  shareWhatsapp(){
    this.socialSharing.shareViaWhatsApp(this.text, null, this.url)
    .then(() =>{

    }).catch(()=>{

    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}
