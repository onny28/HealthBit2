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
 
  message: string = null;
  subject: string = null;
  file: string = null;
  link: string = null;
  items;
  constructor(private cartService: CartService, private socialSharing: SocialSharing) { 
    
  }

  share(){
    this.socialSharing.share(this.message, this.subject, this.file, this.link)
    .then(() =>{

    }).catch(()=>{

    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}
